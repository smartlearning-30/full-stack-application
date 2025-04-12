function redirectToTargetPage(subject, videoIndex) {
    window.location.href = `videoplayer.html?subject=${subject}&videoIndex=${videoIndex}`;
  }           
  //scroll to top
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  window.onscroll = function() {
      const scrollButton = document.getElementById('scrollToTopBtn'); 
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    };
    
  // video section java script
  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    let subject = urlParams.get('subject'); 
    let videoIndex = urlParams.get('videoIndex'); 
    if (subject) {
        subject = subject.trim(); 
        subject = subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase(); 
    }
    document.getElementById('subject-name').textContent = subject ? `Subject: ${subject}` : "Subject: Unknown";
    const subjectPages = {
        "Python": "python.html",
        "DBMS": "DBMS.html",
        "Java": "JAVA.html",
        "Operating System": "operatingsystem.html",
        "Data Structures": "datastructures.html",
        "C": "c.html"
    };
  
    const prevPage = subjectPages[subject] ? subjectPages[subject] : "index.html";
  
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const subjectData = data.find(item => item.subject.trim().toLowerCase() === subject.toLowerCase());
            if (subjectData) {
                const videoData = subjectData.videos.find(video => video.comment === videoIndex.toString());
                if (videoData) {
                    document.getElementById('video-frame').src = videoData.videoUrl;
                } else {
                    document.querySelector('.video-wrapper').innerHTML = '<p>Video not found.</p>';
                }
            } else {
                document.querySelector('.video-wrapper').innerHTML = '<p>Subject not found.</p>';
            }
        })
        .catch(err => {
            document.querySelector('.video-wrapper').innerHTML = '<p>Error loading video data.</p>';
        });
  
    document.getElementById('back-link').href = prevPage;
  
    const videoFrame = document.getElementById('video-frame');
    const loader = document.querySelector('.loader');
  
    videoFrame.onload = function () {
        videoFrame.classList.add('loaded');
        loader.classList.add('hidden');
    };
  
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙 Dark Mode' : '☀️ Light Mode';
    });
  });
  // Scroll Animation
  document.addEventListener("DOMContentLoaded", function() {
      const animateElements = document.querySelectorAll(
          ".featurespage-mnheading, " +
          ".featurespage-heading, " +
          ".video-headingmain, " +
          ".video-paragraphmain, " +
          ".video-boxcontainer, " +
          ".code-container, " +
          "p"
      );
      document.querySelectorAll("ul, li").forEach(el => {
          el.style.opacity = "1";
          el.style.transform = "none";
      });
      function checkScroll() {
          const triggerBottom = window.innerHeight * 0.8;
          animateElements.forEach((element) => {
              const elementTop = element.getBoundingClientRect().top;
              if (elementTop < triggerBottom || isAtBottom()) {
                  element.classList.add("show");
              }
          });
      }
      function isAtBottom() {
          return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
      }
      checkScroll();
      window.addEventListener("scroll", checkScroll);
      setTimeout(checkScroll, 100);
  });
  

  const API_BASE_URL = 'https://full-stack-application-y2jd.onrender.com';
  
  // name modal
  document.addEventListener('DOMContentLoaded', function() {
      const nameModal = $('#nameModal').modal({
          backdrop: 'static',
          keyboard: false
      });
      const loginModal = $('#loginModal').modal({
          backdrop: 'static',
          keyboard: false
      });
      const signupModal = $('#signupModal').modal({
          backdrop: 'static',
          keyboard: false
      });
      if (!localStorage.getItem('userName')) {
          loginModal.modal('show');
      }
      // change between login and signup
      document.getElementById('showSignup')?.addEventListener('click', function(e) {
          e.preventDefault();
          loginModal.modal('hide');
          signupModal.modal('show');
      });
      document.getElementById('showLogin')?.addEventListener('click', function(e) {
          e.preventDefault();
          signupModal.modal('hide');
          loginModal.modal('show');
      });
      //name form submission 
      document.getElementById('nameForm')?.addEventListener('submit', async function(e) {
          e.preventDefault();
          const form = e.target;
          const nameInput = document.getElementById('userName');
          const submitBtn = form.querySelector('button[type="submit"]');
          const name = nameInput.value.trim();
          if (!name) {
              nameInput.focus();
              showFeedback('Please enter your name', 'danger');
              return;
          }
          submitBtn.disabled = true;
          submitBtn.innerHTML = 
              `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
              Checking availability...`;
          try {
              const response = await fetch('https://full-stack-application-y2jd.onrender.com/api/users', {
                  method: 'POST',
                  headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify({ username: name })
              });
              const data = await response.json();
              if (!response.ok) {
                  if (response.status === 409) {
                      throw new Error(`${data.error}. ${data.solution}`);
                  }
                  throw new Error(data.error || 'Registration failed');
              }
              localStorage.setItem('userName', name);
              localStorage.setItem('userId', data.id);
              showFeedback(`Welcome, ${name}!`, 'success');
              updateUserNameDisplay();
              nameModal.modal('hide');
          } catch (error) {
              showFeedback(error.message, 'danger');
              console.error('Submission error:', error);
          } finally {
              submitBtn.disabled = false;
              submitBtn.textContent = 'Continue';
          }
      });
      // Login form
      document.getElementById('loginForm')?.addEventListener('submit', async function(e) {
          e.preventDefault();
          const form = e.target;
          const username = document.getElementById('loginUsername').value.trim();
          const password = document.getElementById('loginPassword').value;
          const submitBtn = form.querySelector('button[type="submit"]');
          const feedback = document.getElementById('loginFeedback');
          if (!username || !password) {
              showFeedback('Please enter both username and password', 'danger', feedback);
              return;
          }
          submitBtn.disabled = true;
          submitBtn.innerHTML = 
              `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
              Logging in...`;
          try {
             const response = await fetch(`${API_BASE_URL}/api/login`, {
                  method: 'POST',
                  headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify({ username, password })
              });
              const data = await response.json();
              if (!response.ok) {
                  throw new Error(data.error || 'Login failed');
              }
              localStorage.setItem('userName', data.username);
              localStorage.setItem('userId', data.id);
              showFeedback(`Welcome back, ${data.username.toUpperCase()}!`, 'success', feedback);
              updateUserNameDisplay();
              setTimeout(() => {
                  loginModal.modal('hide');
              }, 0);
          } catch (error) {
              showFeedback(error.message, 'danger', feedback);
              console.error('Login error:', error);
          } finally {
              submitBtn.disabled = false;
              submitBtn.textContent = 'Login';
          }
      });
      // Signup form 
      document.getElementById('signupForm')?.addEventListener('submit', async function(e) {
          e.preventDefault();
          const form = e.target;
          const username = document.getElementById('signupUsername').value.trim();
          const password = document.getElementById('signupPassword').value;
          const submitBtn = form.querySelector('button[type="submit"]');
          const feedback = document.getElementById('signupFeedback');
          if (!username || !password) {
              showFeedback('Please enter both username and password', 'danger', feedback);
              return;
          }
          if (password.length < 6) {
              showFeedback('Password must be at least 6 characters', 'danger', feedback);
              return;
          }
          submitBtn.disabled = true;
          submitBtn.innerHTML = 
              `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
              Creating account...`;
          try {
              const response = await fetch(`${API_BASE_URL}/api/signup`, {
                  method: 'POST',
                  headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify({ username, password })
              });
              const data = await response.json();
              if (!response.ok) {
                  if (response.status === 409) {
                      throw new Error(`${data.error}. ${data.solution}`);
                  }
                  throw new Error(data.error || 'Registration failed');
              }
              localStorage.setItem('userName', data.username);
              localStorage.setItem('userId', data.id);
              showFeedback(`Account created successfully! Welcome, ${data.username.toUpperCase()}!`, 'success', feedback);
              updateUserNameDisplay();
              setTimeout(() => {
                  signupModal.modal('hide');
              }, 0);
          } catch (error) {
              showFeedback(error.message, 'danger', feedback);
              console.error('Signup error:', error);
          } finally {
              submitBtn.disabled = false;
              submitBtn.textContent = 'Sign Up';
          }
      });
      // show feedback message
      function showFeedback(message, type) {
          const toastEl = $('#topToast');
          const toastMessage = $('#toastMessage');
          toastMessage.text(message);
          toastEl.find('.btn-close').remove();
          toastEl.removeClass('bg-danger bg-success').addClass(`bg-${type}`);
          const charCount = message.length;
          const minWidth = 200; 
          const maxWidth = Math.min(window.innerWidth - 40, 600); 
          const calculatedWidth = Math.min(minWidth + (charCount * 8), maxWidth);
          toastEl.css({
              'width': `${calculatedWidth}px`,
              'max-width': `${maxWidth}px`,
              'height': 'auto' 
          });
          toastEl.toast({ delay: 2000 });
          toastEl.toast('show');
          setTimeout(() => {
              toastEl.toast('hide');
          }, 2000);
      }
  
      // username display
      function updateUserNameDisplay() {
          const userNameDisplay = document.getElementById('userNameDisplay');
          const userNameContainer = document.getElementById('userNameDisplayContainer');
          const storedUserName = localStorage.getItem('userName');
      
          if (userNameDisplay && userNameContainer) {
              if (storedUserName && storedUserName.trim() !== "") {
                  userNameDisplay.textContent = storedUserName.toUpperCase(); 
                  userNameContainer.style.display = 'block'; 
              } else {
                  userNameContainer.style.display = 'none'; 
              }
          }
      }
      updateUserNameDisplay();
  });
  // for using second time
  function updateUserNameDisplay() {
      const containers = document.querySelectorAll('.user-name-display');
      const textDisplays = document.querySelectorAll('.user-name-text');
      const storedUserName = localStorage.getItem('userName');
      console.log('Containers found:', containers.length);
      console.log('Text displays found:', textDisplays.length);
      console.log('Stored username:', storedUserName);
      containers.forEach(container => {
          container.style.display = storedUserName?.trim() ? 'block' : 'none';
      });
      textDisplays.forEach(display => {
          if (storedUserName?.trim()) {
              display.textContent = storedUserName.toUpperCase(); 
          } else {
              display.textContent = ''; 
          }
      });
  }
  window.addEventListener('storage', function(e) {
      if (e.key === 'userName') {
          updateUserNameDisplay();
      }
  });
  document.addEventListener('DOMContentLoaded', updateUserNameDisplay);
  // user icon
  document.addEventListener('DOMContentLoaded', function() {
      const button = document.getElementById('userButton');
      const panel = document.getElementById('userPanel');
      let autoCloseTimeout;
      button.addEventListener('click', function() {
        button.classList.add('hidden');
        setTimeout(() => {
          panel.classList.add('visible');
          autoCloseTimeout = setTimeout(closePanel, 5000);
        }, 400);
      });
      panel.addEventListener('click', closePanel);
      function closePanel() {
        clearTimeout(autoCloseTimeout);
        panel.classList.remove('visible');
        setTimeout(() => {
          button.classList.remove('hidden');
        }, 400);
      }
  });
  // cheat sheet script
  document.addEventListener("DOMContentLoaded", function() {
      const saveNotesBtn = document.getElementById('saveNotesBtn');
      if (saveNotesBtn) {
          saveNotesBtn.addEventListener('click', async function() {
              try {
                  const modalTitle = document.getElementById('cheatSheetTitle').textContent;
                  const modalBody = document.getElementById('cheatSheetContent').innerText;
                  const content = `${modalTitle}\n\n${modalBody}`;
                  if ('showSaveFilePicker' in window) {
                      try {
                          const handle = await window.showSaveFilePicker({
                              suggestedName: 'Cheat_Sheet.txt',
                              types: [{ description: 'Text Files', accept: { 'text/plain': ['.txt'] } }]
                          });
                          const writable = await handle.createWritable();
                          await writable.write(content);
                          await writable.close();
                      } catch (err) {
                          console.log("Save canceled or not supported.");
                      }
                  } else {
                      alert("Your browser doesn't support direct file saving. Copy the text manually (Ctrl+C).");
                  }
              } catch (error) {
                  console.error('Error:', error);
              }
          });
      } else {
          console.error("Button with ID 'saveNotesBtn' not found.");
      }
  });
  // load cheatsheet
  function loadCheatSheet(topic) {
      console.log("Function called with topic:", topic);
      console.log("Available keypoints:", window.keypoints);
      if (window.keypoints && window.keypoints.hasOwnProperty(topic)) {
          document.getElementById('cheatSheetTitle').innerHTML = window.keypoints[topic].title;
          document.getElementById('cheatSheetContent').innerHTML = window.keypoints[topic].content;
          let modal = new bootstrap.Modal(document.getElementById('cheatSheetModal'), { backdrop: 'static' });
          modal.show();
      } else {
          alert("Content not available!");
      }
  }
  
  //######################################################################
  /*################   Profile java script      ########################*/
  document.addEventListener('DOMContentLoaded', function() {
      const username = localStorage.getItem('userName');
      const userId = localStorage.getItem('userId');
      if (!username || !userId) {
          document.getElementById('profileContainer').innerHTML = `
              <h2>Profile</h2>
              <div class="error-message">
                  You need to <a href="index.html">login</a> to view your profile.
              </div>
          `;
          return;
      }
      document.getElementById('logoutBtn').addEventListener('click', logoutUser);
      document.getElementById('getScoresBtn').addEventListener('click', fetchAndDisplayScores);
      loadProfileData(userId);
      document.getElementById('passwordForm').addEventListener('submit', function(e) {
          e.preventDefault();
          updatePassword(userId);
      });
      document.getElementById('togglePasswordForm').addEventListener('click', function() {
          const formContainer = document.getElementById('passwordFormContainer');
          formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
      });
      document.getElementById('usernameUppercase').textContent = username.toUpperCase();
  });
  //SCORE FUNCTIONS 
  async function fetchAndDisplayScores() {
      const userId = localStorage.getItem('userId');
      const scoresDisplay = document.getElementById('scoresDisplay');
      
      // Check if scores are already visible
      if (scoresDisplay.innerHTML && !scoresDisplay.innerHTML.includes('Loading')) {
          // If scores are visible, clear them (toggle off)
          scoresDisplay.innerHTML = '';
          return;
      }
  
      if (!userId) {
          scoresDisplay.innerHTML = `
              <div class="error-message">
                  You need to login to view your scores.
              </div>
          `;
          return;
      }
      try {
          scoresDisplay.innerHTML = '<p>Loading your scores...</p>';
          const response = await fetch(`${API_BASE_URL}/api/users/${userId}/scores`);
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
              const text = await response.text();
              throw new Error(`Server returned ${response.status}: ${text}`);
          }
          const data = await response.json();
          if (!response.ok) {
              throw new Error(data.error || `Server returned ${response.status}`);
          }
          displayScores(data);
      } catch (error) {
          console.error('Fetch error:', error);
          scoresDisplay.innerHTML = `
              <div class="error-message">
                  Error loading scores: ${error.message}
                  <p>Please check:</p>
                  <ul>
                      <li>Server is running</li>
                      <li>API endpoint is correct</li>
                      <li>User ID exists</li>
                  </ul>
              </div>
          `;
      }
  }
  //SCORE FUNCTIONS 
  function displayScores(data) {
      const scoresContainer = document.getElementById('scoresDisplay');
      let html = `
          <h3>Your Quiz Scores</h3>
          <div class="scores-list">
      `;
      const subjects = {
          python: "Python",
          dbms: "DBMS",
          java: "Java",
          operating_system: "Operating System",
          data_structures: "Data Structures",
          c: "C Programming"
      };
      for (const [subjectKey, subjectName] of Object.entries(subjects)) {
          const score = data.scores[subjectKey];
          const scoreDisplay = score === 'Not attempted' ? 
              `<span class="not-attempted">${score}</span>` : 
              `<span class="score-value">${score}/20</span>`;
          html += `
              <div class="score-item">
                  <span class="score-subject">${subjectName}</span>
                  ${scoreDisplay}
              </div>
          `;
      }
      html += `</div>`;
      scoresContainer.innerHTML = html;
  }
  //PROFILE FUNCTIONS 
  async function loadProfileData(userId) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/users/${userId}/profile`);
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
              const text = await response.text();
              console.error('Non-JSON response:', text);
              throw new Error(`Server returned ${response.status}: ${text}`);
          }
          const data = await response.json();
          if (!response.ok) {
              throw new Error(data.error || `Server returned ${response.status}`);
          }
          document.getElementById('profileDetails').innerHTML = `
              <p><strong>Username:</strong> ${data.username.toUpperCase()}</p>
              <p><strong>User ID:</strong> ${data.id}</p>
          `;
      } catch (error) {
          console.error('Error loading profile:', error);
          document.getElementById('profileDetails').innerHTML = `
              <div class="error-message">
                  Error loading profile: ${error.message}
                  <p>Please check:</p>
                  <ul>
                      <li>Server is running</li>
                      <li>User ID exists</li>
                      <li>Profile endpoint is accessible</li>
                  </ul>
              </div>
          `;
      }
  }


// Update the password update function
async function updatePassword(userId) {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const messageDiv = document.getElementById('passwordMessage');
    
    // Clear previous messages
    messageDiv.innerHTML = '';
    messageDiv.className = 'message-area'; // Reset classes
    
    // Basic validation
    if (!currentPassword || !newPassword) {
        showMessage(messageDiv, 'Both fields are required', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showMessage(messageDiv, 'Password must be at least 6 characters', 'error');
        return;
    }
    
    if (currentPassword === newPassword) {
        showMessage(messageDiv, 'New password must be different', 'error');
        return;
    }

    try {
        const response = await fetch(`https://full-stack-application-y2jd.onrender.com/api/users/${userId}/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPassword,
                newPassword
            })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Password update failed');
        }
        
        // Success
        showMessage(messageDiv, data.message || 'Password updated successfully', 'success');
        document.getElementById('passwordForm').reset();
        
        // Hide form after successful update (optional)
        setTimeout(() => {
            document.getElementById('passwordFormContainer').style.display = 'none';
        }, 2000);
        
    } catch (error) {
        console.error('Password update error:', error);
        showMessage(messageDiv, error.message, 'error');
    }
}

function showMessage(element, message, type) {
    element.innerHTML = message;
    element.className = 'message-area'; // Reset classes
    element.classList.add(type === 'error' ? 'text-danger' : 'text-success');
    const messageModal = new bootstrap.Modal(document.getElementById('passwordMessageModal'));
    messageModal.show();
    const delay = type === 'success' ? 1000 : 3000;
    setTimeout(() => {
        messageModal.hide();
    }, delay);
}

  //logout
  async function logoutUser() {
    try {
      const sessionId = localStorage.getItem('sessionId');
      
      const response = await fetch(`${API_BASE_URL}/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionId }),
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Logout request failed');
      }
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('sessionId');
      
      window.location.href = 'index.html';
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error during logout. Please try again.');
    }
  }

      // Notification panel
      const tab = document.getElementById("notificationTab");
      const panel = document.getElementById("notificationPanel");
      tab.addEventListener("click", () => {
        panel.classList.add("open");
        tab.classList.add("hidden");
      });
      panel.addEventListener("click", () => {
        panel.classList.remove("open");
        tab.classList.remove("hidden");
      });
      document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && !tab.contains(e.target)) {
          panel.classList.remove("open");
          tab.classList.remove("hidden");
        }
      });