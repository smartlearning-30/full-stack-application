const express = require('express');
const mysql = require('mysql2');
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

const db = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'smartlearning',
  connectTimeout: 10000,
  enableKeepAlive: true
});

let dbReady = false;

function handleConnect() {
  db.connect(err => {
    if (err) {
      console.error('❌ Connection failed:', err.message);
      dbReady = false;
      setTimeout(handleConnect, 5000);
      return;
    }
    dbReady = true;
    console.log('✅ Database connected');
    setInterval(checkDbHealth, 30000);
  });
}

// Start initial connection
handleConnect();

// Database error handling
db.on('error', err => {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('⚠️ Connection lost - reconnecting...');
    dbReady = false;
    handleConnect();
  } else {
    console.error('Database error:', err);
  }
});

// Health check function
function checkDbHealth() {
  db.query('SELECT 1', (err) => {
    if (err) {
      console.error('Health check failed:', err.message);
      dbReady = false;
    } else {
      dbReady = true;
    }
  });
}

// Database status middleware
app.use((req, res, next) => {
  if (!dbReady && req.method !== 'OPTIONS') {
    return res.status(503).json({ 
      error: 'Database unavailable',
      solution: 'Please try again later'
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
app.get('/users', (req, res) => {
  db.query('SELECT id, username FROM users', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ 
        error: 'Database error',
        details: err.message
      });
    }
    res.json(results);
  });
});

// Legacy user creation (without password)
app.post('/api/users', (req, res) => {
  const { username } = req.body;
  
  if (!username || typeof username !== 'string' || !username.trim()) {
    return res.status(400).json({ 
      error: 'Invalid username',
      solution: 'Please provide a non-empty name'
    });
  }

  const cleanName = username.trim();

  db.query(
    'SELECT id FROM users WHERE username = ?', 
    [cleanName],
    (err, results) => {
      if (err) {
        console.error('Check error:', err);
        return res.status(500).json({ 
          error: 'Database error',
          details: err.message
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          error: `Username "${cleanName}" already exists`,
          solution: 'Please choose a different name'
        });
      }

      db.query(
        'INSERT INTO users (username) VALUES (?)',
        [cleanName],
        (err, result) => {
          if (err) {
            console.error('Insert error:', err);
            return res.status(500).json({ 
              error: 'Failed to create user',
              details: err.message
            });
          }
          
          res.status(201).json({
            success: true,
            id: result.insertId,
            username: cleanName,
            message: 'User created successfully'
          });
        }
      );
    }
  );
});

// User login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      error: 'Username and password are required'
    });
  }

  db.query(
    'SELECT id, username FROM users WHERE username = ? AND password = ?',
    [username.trim(), password],
    (err, results) => {
      if (err) {
        console.error('Login error:', err);
        return res.status(500).json({ 
          error: 'Database error',
          details: err.message
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          error: 'Invalid username or password'
        });
      }

      res.json({
        success: true,
        id: results[0].id,
        username: results[0].username,
        message: 'Login successful'
      });
    }
  );
});

// User signup endpoint
app.post('/api/signup', (req, res) => {
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

  db.query(
    'SELECT id FROM users WHERE username = ?', 
    [cleanName],
    (err, results) => {
      if (err) {
        console.error('Check error:', err);
        return res.status(500).json({ 
          error: 'Database error',
          details: err.message
        });
      }

      if (results.length > 0) {
        return res.status(409).json({
          error: `Username "${cleanName}" already exists`,
          solution: 'Please choose a different name'
        });
      }

      db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [cleanName, password],
        (err, result) => {
          if (err) {
            console.error('Insert error:', err);
            return res.status(500).json({ 
              error: 'Failed to create user',
              details: err.message
            });
          }
          
          res.status(201).json({
            success: true,
            id: result.insertId,
            username: cleanName,
            message: 'User created successfully'
          });
        }
      );
    }
  );
});

// Check username availability
app.get('/api/users/:username', (req, res) => {
  const username = req.params.username.trim();
  
  if (!username) {
    return res.status(400).json({ 
      error: 'Invalid username' 
    });
  }

  db.query(
    'SELECT id FROM users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Query error:', err);
        return res.status(500).json({ 
          error: 'Database error',
          details: err.message
        });
      }
      
      res.json({ 
        available: results.length === 0,
        message: results.length ? 'Username taken' : 'Username available'
      });
    }
  );
});

// score section
app.post('/api/users/:id/scores', (req, res) => {
  const userId = req.params.id;
  const { subject, score } = req.body;
  const validSubjects = ['python', 'dbms', 'java', 'operating_system', 'data_structures', 'c'];

  console.log(`Score Update Request - User: ${userId}, Subject: ${subject}, Score: ${score}`);
  if (!userId || isNaN(userId)) {
      return res.status(400).json({ 
          error: 'Invalid user ID',
          solution: 'Please provide a valid numeric user ID'
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

  const query = `
      UPDATE users 
      SET ${subject} = ?
      WHERE id = ?
  `;

  console.log(`Executing: ${query} with values: [${score}, ${userId}]`);

  db.query(query, [score, userId], (err, result) => {
      if (err) {
          console.error('Score update failed:', err);
          return res.status(500).json({ 
              error: 'Failed to update score',
              details: err.message
          });
      }

      if (result.affectedRows === 0) {
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
  });
});

app.get('/api/users/:id/scores', (req, res) => {
  const userId = req.params.id;
  
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ 
      error: 'Invalid user ID',
      solution: 'Please provide a valid numeric user ID'
    });
  }

  const query = `
    SELECT 
      id, username,
      COALESCE(python, NULL) as python,
      COALESCE(dbms, NULL) as dbms,
      COALESCE(java, NULL) as java,
      COALESCE(operating_system, NULL) as operating_system,
      COALESCE(data_structures, NULL) as data_structures,
      COALESCE(c, NULL) as c
    FROM users 
    WHERE id = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Score fetch error:', err);
      return res.status(500).json({ 
        error: 'Failed to fetch scores',
        details: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({ 
        error: 'User not found',
        solution: 'Please check the user ID'
      });
    }

    const userData = results[0];
    
    const response = {
      id: userData.id,
      username: userData.username,
      scores: {
        python: userData.python !== null ? userData.python : 'Not attempted',
        dbms: userData.dbms !== null ? userData.dbms : 'Not attempted',
        java: userData.java !== null ? userData.java : 'Not attempted',
        operating_system: userData.operating_system !== null ? userData.operating_system : 'Not attempted',
        data_structures: userData.data_structures !== null ? userData.data_structures : 'Not attempted',
        c: userData.c !== null ? userData.c : 'Not attempted'
      }
    };

    res.json(response);
  });
});

// login details get point for the profile
// Get full user profile (including name)
app.get('/api/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ 
      error: 'Invalid user ID',
      solution: 'Please provide a valid numeric user ID'
    });
  }

  db.query(
    'SELECT id, username, password FROM users WHERE id = ?',
    [userId],
    (err, results) => {
      if (err) {
        console.error('Profile fetch error:', err);
        return res.status(500).json({ 
          error: 'Failed to fetch profile',
          details: err.message
        });
      }

      if (results.length === 0) {
        return res.status(404).json({ 
          error: 'User not found',
          solution: 'Please check the user ID'
        });
      }

      res.json(results[0]);
    }
  );
});

//password reset endpoint
app.put('/api/users/:id/password', (req, res) => {
  console.log('Password reset request received:', req.body);
  const userId = req.params.id;
  const { currentPassword, newPassword } = req.body;

  // Add validation for empty passwords
  if (!currentPassword || currentPassword.trim() === '') {
    return res.status(400).json({ 
      error: 'Current password is required',
      field: 'currentPassword'
    });
  }

  if (!newPassword || newPassword.trim() === '') {
    return res.status(400).json({ 
      error: 'New password is required',
      field: 'newPassword'
    });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ 
      error: 'New password must be at least 6 characters',
      field: 'newPassword',
      minLength: 6
    });
  }

  // First verify current password
  db.query(
    'SELECT id FROM users WHERE id = ? AND password = ?',
    [userId, currentPassword],
    (err, results) => {
      if (err) {
        console.error('Password verification error:', err);
        return res.status(500).json({ 
          error: 'Database error during verification',
          details: err.message,
          code: 'DB_VERIFICATION_ERROR'
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          error: 'Current password is incorrect',
          code: 'INCORRECT_PASSWORD'
        });
      }

      // Update password
      db.query(
        'UPDATE users SET password = ? WHERE id = ?',
        [newPassword, userId],
        (err, result) => {
          if (err) {
            console.error('Password update error:', err);
            return res.status(500).json({ 
              error: 'Failed to update password in database',
              details: err.message,
              code: 'DB_UPDATE_ERROR'
            });
          }

          if (result.affectedRows === 0) {
            return res.status(404).json({
              error: 'User not found',
              code: 'USER_NOT_FOUND'
            });
          }

          res.json({
            success: true,
            message: 'Password updated successfully',
            timestamp: new Date().toISOString()
          });
        }
      );
    }
  );
});

// logout
app.post('/api/logout', (req, res) => {
  try {
      // If using session cookies:
      res.clearCookie('sessionId'); // Replace with your cookie name
      res.clearCookie('token'); // If using JWT
      
      // If using JWT in headers, the client just needs to discard the token
      
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
// leaderboard
app.get('/api/leaderboard', (req, res) => {
  const subject = req.query.subject || 'python';
  const validSubjects = ['python', 'dbms', 'java', 'operating_system', 'data_structures', 'c'];
  if (!validSubjects.includes(subject)) {
      return res.status(400).json({ 
          error: 'Invalid subject',
          solution: `Please provide one of: ${validSubjects.join(', ')}`
      });
  }
  const query = `
      SELECT id, username, ${subject} as score 
      FROM users 
      WHERE ${subject} IS NOT NULL 
      ORDER BY ${subject} DESC 
      LIMIT 10
  `;
  db.query(query, (err, results) => {
      if (err) {
          console.error('Leaderboard query error:', err);
          return res.status(500).json({ 
              error: 'Failed to fetch leaderboard',
              details: err.message
          });
      }

      res.json(results);
  });
});
// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🛡️ CORS enabled for all origins`);
});