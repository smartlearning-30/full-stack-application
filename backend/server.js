const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: true, // Reflects the request origin
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());
app.use(express.json());

// MongoDB Atlas connection setup from .env
const mongoUrl = process.env.MONGODB_URI; // Using the full Atlas connection string from .env
const dbName = process.env.DB_NAME || 'smartLearning'; // Fallback to 'smartLearning' if not in .env
let client; // Store the MongoClient instance for proper connection management
let db;
let dbReady = false;
let connectionRetries = 0;
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds between retries

async function connectToMongo() {
  try {
    console.log('🔌 Connecting to MongoDB Atlas...');
    
    client = new MongoClient(mongoUrl, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 30000,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 50,
      retryWrites: true,
      retryReads: true
    });

    await client.connect();
    db = client.db(dbName);
    dbReady = true;
    connectionRetries = 0;
    console.log('✅ Successfully connected to MongoDB Atlas');
    
    // Set up indexes
    await setupIndexes();
    
    // Start periodic health check
    setInterval(checkDbHealth, 30000);
    
  } catch (err) {
    dbReady = false;
    connectionRetries++;
    
    console.error(`❌ Connection failed (attempt ${connectionRetries}/${MAX_RETRIES}):`, err.message);
    
    if (connectionRetries < MAX_RETRIES) {
      console.log(`Retrying in ${RETRY_DELAY/1000} seconds...`);
      setTimeout(connectToMongo, RETRY_DELAY);
    } else {
      console.error('⚠️ Maximum connection retries reached. Please check your MongoDB Atlas configuration.');
      console.error('Verify your:', {
        connectionString: mongoUrl ? 'present' : 'missing',
        networkAccess: 'Check Atlas IP whitelist',
        credentials: 'Verify username/password'
      });
    }
  }
}

async function setupIndexes() {
  try {
    await db.collection('users').createIndex({ username: 1 }, { unique: true });
    console.log('🔑 Created unique index on username field');
  } catch (err) {
    console.error('Index creation error:', err);
  }
}

async function checkDbHealth() {
  try {
    await db.command({ ping: 1 });
    if (!dbReady) {
      dbReady = true;
      console.log('✅ Database connection restored');
    }
  } catch (err) {
    dbReady = false;
    console.error('⚠️ Database health check failed:', err.message);
    // Attempt to reconnect
    await connectToMongo();
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down gracefully...');
  try {
    if (client) {
      await client.close();
      console.log('🔌 MongoDB connection closed');
    }
    process.exit(0);
  } catch (err) {
    console.error('Error closing connection:', err);
    process.exit(1);
  }
});

// Initialize connection
connectToMongo();

// Database status middleware
app.use((req, res, next) => {
  if (!dbReady && req.method !== 'OPTIONS') {
    return res.status(503).json({ 
      status: 'error',
      error: 'Database currently unavailable',
      solution: 'Please try again later',
      retryIn: '5 seconds'
    });
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h1>SmartLearning Backend</h1>
    <p>Status: ${dbReady ? '✅ Operational' : '❌ Maintenance'}</p>
    <p>Endpoints:</p>
    <ul>
      <li><a href="/users">GET /users</a> - List all users</li>
      <li>POST /api/users - Create new user (legacy)</li>
      <li>POST /api/login - User login</li>
      <li>POST /api/signup - User registration</li>
      <li>GET /api/users/:username - Check username</li>
      <li>GET /api/users/:id/scores - Get all user scores</li>
      <li>POST /api/users/:id/scores - Update quiz score</li>
      <li>GET /api/leaderboard - Get leaderboard</li>
    </ul>
  `);
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await db.collection('users')
      .find({}, { projection: { _id: 1, username: 1 } })
      .toArray();
    
    // Convert MongoDB _id to id for consistency with previous API
    const formattedUsers = users.map(user => ({
      id: user._id,
      username: user.username
    }));
    
    res.json(formattedUsers);
  } catch (err) {
    console.error('Query error:', err);
    res.status(500).json({ 
      error: 'Database error',
      details: err.message
    });
  }
});

// Legacy user creation (without password)
app.post('/api/users', async (req, res) => {
  const { username } = req.body;
  
  if (!username || typeof username !== 'string' || !username.trim()) {
    return res.status(400).json({ 
      error: 'Invalid username',
      solution: 'Please provide a non-empty name'
    });
  }

  const cleanName = username.trim();

  try {
    // Check if username exists
    const existingUser = await db.collection('users').findOne({ username: cleanName });
    
    if (existingUser) {
      return res.status(409).json({
        error: `Username "${cleanName}" already exists`,
        solution: 'Please choose a different name'
      });
    }

    // Create new user with default scores
    const newUser = {
      username: cleanName,
      scores: {
        python: null,
        dbms: null,
        java: null,
        operating_system: null,
        data_structures: null,
        c: null
      },
      createdAt: new Date()
    };

    const result = await db.collection('users').insertOne(newUser);
    
    res.status(201).json({
      success: true,
      id: result.insertedId,
      username: cleanName,
      message: 'User created successfully'
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ 
      error: 'Failed to create user',
      details: err.message
    });
  }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      error: 'Username and password are required'
    });
  }

  try {
    const user = await db.collection('users').findOne({
      username: username.trim(),
      password: password
    });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid username or password'
      });
    }

    res.json({
      success: true,
      id: user._id,
      username: user.username,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ 
      error: 'Database error',
      details: err.message
    });
  }
});

// User signup endpoint
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || typeof username !== 'string' || !username.trim()) {
    return res.status(400).json({ 
      error: 'Invalid username',
      solution: 'Please provide a non-empty name'
    });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ 
      error: 'Password must be at least 6 characters'
    });
  }

  const cleanName = username.trim();

  try {
    // Check if username exists
    const existingUser = await db.collection('users').findOne({ username: cleanName });
    
    if (existingUser) {
      return res.status(409).json({
        error: `Username "${cleanName}" already exists`,
        solution: 'Please choose a different name'
      });
    }

    // Create new user with default scores
    const newUser = {
      username: cleanName,
      password: password,
      scores: {
        python: null,
        dbms: null,
        java: null,
        operating_system: null,
        data_structures: null,
        c: null
      },
      createdAt: new Date()
    };

    const result = await db.collection('users').insertOne(newUser);
    
    res.status(201).json({
      success: true,
      id: result.insertedId,
      username: cleanName,
      message: 'User created successfully'
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ 
      error: 'Failed to create user',
      details: err.message
    });
  }
});

// Check username availability
app.get('/api/users/:username', async (req, res) => {
  const username = req.params.username.trim();
  
  if (!username) {
    return res.status(400).json({ 
      error: 'Invalid username' 
    });
  }

  try {
    const user = await db.collection('users').findOne({ username });
    
    res.json({ 
      available: !user,
      message: user ? 'Username taken' : 'Username available'
    });
  } catch (err) {
    console.error('Query error:', err);
    res.status(500).json({ 
      error: 'Database error',
      details: err.message
    });
  }
});

// Update user score
app.post('/api/users/:id/scores', async (req, res) => {
  const userId = req.params.id;
  const { subject, score } = req.body;
  const validSubjects = ['python', 'dbms', 'java', 'operating_system', 'data_structures', 'c'];

  console.log(`Score Update Request - User: ${userId}, Subject: ${subject}, Score: ${score}`);
  
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ 
      error: 'Invalid user ID',
      solution: 'Please provide a valid user ID'
    });
  }

  if (!subject || !validSubjects.includes(subject)) {
    return res.status(400).json({ 
      error: 'Invalid subject',
      solution: `Please provide one of: ${validSubjects.join(', ')}`
    });
  }

  if (score === undefined || isNaN(score) || score < 0) {
    return res.status(400).json({ 
      error: 'Invalid score',
      solution: 'Please provide a non-negative numeric score'
    });
  }

  try {
    const updateResult = await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { [`scores.${subject}`]: score } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ 
        error: 'User not found',
        solution: 'Please check the user ID'
      });
    }

    console.log(`Score updated successfully for user ${userId}`);
    res.json({
      success: true,
      userId,
      subject,
      score,
      message: 'Score updated successfully'
    });
  } catch (err) {
    console.error('Score update failed:', err);
    res.status(500).json({ 
      error: 'Failed to update score',
      details: err.message
    });
  }
});

// Get user scores
app.get('/api/users/:id/scores', async (req, res) => {
  const userId = req.params.id;
  
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ 
      error: 'Invalid user ID',
      solution: 'Please provide a valid user ID'
    });
  }

  try {
    const user = await db.collection('users').findOne(
      { _id: new ObjectId(userId) },
      { projection: { username: 1, scores: 1 } }
    );

    if (!user) {
      return res.status(404).json({ 
        error: 'User not found',
        solution: 'Please check the user ID'
      });
    }

    const response = {
      id: user._id,
      username: user.username,
      scores: {
        python: user.scores.python !== null ? user.scores.python : 'Not attempted',
        dbms: user.scores.dbms !== null ? user.scores.dbms : 'Not attempted',
        java: user.scores.java !== null ? user.scores.java : 'Not attempted',
        operating_system: user.scores.operating_system !== null ? user.scores.operating_system : 'Not attempted',
        data_structures: user.scores.data_structures !== null ? user.scores.data_structures : 'Not attempted',
        c: user.scores.c !== null ? user.scores.c : 'Not attempted'
      }
    };

    res.json(response);
  } catch (err) {
    console.error('Score fetch error:', err);
    res.status(500).json({ 
      error: 'Failed to fetch scores',
      details: err.message
    });
  }
});

// Get full user profile (including name)
app.get('/api/users/:id/profile', async (req, res) => {
  const userId = req.params.id;
  
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ 
      error: 'Invalid user ID',
      solution: 'Please provide a valid user ID'
    });
  }

  try {
    const user = await db.collection('users').findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } } // Exclude password by default
    );

    if (!user) {
      return res.status(404).json({ 
        error: 'User not found',
        solution: 'Please check the user ID'
      });
    }

    // Convert _id to id for consistency
    const { _id, ...userData } = user;
    res.json({ id: _id, ...userData });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ 
      error: 'Failed to fetch profile',
      details: err.message
    });
  }
});

// Update password endpoint (plaintext version)
app.put('/api/users/:id/password', async (req, res) => {
  const userId = req.params.id;
  const { currentPassword, newPassword } = req.body;

  // Basic validation
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ 
      error: 'Both current and new password are required'
    });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ 
      error: 'New password must be at least 6 characters'
    });
  }

  if (currentPassword === newPassword) {
    return res.status(400).json({ 
      error: 'New password must be different from current password'
    });
  }

  try {
    // 1. Verify current password
    const user = await db.collection('users').findOne({ 
      _id: new ObjectId(userId),
      password: currentPassword
    });

    if (!user) {
      return res.status(401).json({
        error: 'Current password is incorrect'
      });
    }

    // 2. Update to new password
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { password: newPassword } }
    );

    res.json({
      success: true,
      message: 'Password updated successfully'
    });

  } catch (err) {
    console.error('Password update error:', err);
    res.status(500).json({ 
      error: 'Database error',
      details: err.message
    });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  try {
    const { sessionId } = req.body;
    
    // Remove session
    if (sessionId && activeSessions.has(sessionId)) {
      activeSessions.delete(sessionId);
    }
    
    // Clear cookies
    res.clearCookie('sessionId');
    res.clearCookie('token');
    
    res.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      error: 'Logout failed',
      details: error.message
    });
  }
});

// Leaderboard endpoint
app.get('/api/leaderboard', async (req, res) => {
  const subject = req.query.subject || 'python';
  const validSubjects = ['python', 'dbms', 'java', 'operating_system', 'data_structures', 'c'];
  
  if (!validSubjects.includes(subject)) {
    return res.status(400).json({ 
      error: 'Invalid subject',
      solution: `Please provide one of: ${validSubjects.join(', ')}`
    });
  }

  try {
    const leaderboard = await db.collection('users')
      .find({ [`scores.${subject}`]: { $ne: null } })
      .sort({ [`scores.${subject}`]: -1 })
      .limit(10)
      .project({ 
        _id: 1, 
        username: 1, 
        score: `$scores.${subject}` 
      })
      .toArray();

    // Convert _id to id for consistency
    const formattedLeaderboard = leaderboard.map(user => ({
      id: user._id,
      username: user.username,
      score: user.score
    }));

    res.json(formattedLeaderboard);
  } catch (err) {
    console.error('Leaderboard query error:', err);
    res.status(500).json({ 
      error: 'Failed to fetch leaderboard',
      details: err.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000; // Changed default to 3000 (more common for Node.js)
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🛡️ CORS enabled for all origins`);
  console.log(`🔗 MongoDB Atlas: ${mongoUrl.includes('@') ? 'Connected to Atlas' : 'Using local MongoDB'}`);
});