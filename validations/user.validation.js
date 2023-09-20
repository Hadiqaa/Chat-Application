


const validateRegistration = (req, res, next) => {
    const { email, password } = req.body;
  
    //Email password required
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    // Password validation
    const minPasswordLength = 8;
    const maxPasswordLength = 64;
  
    if (!password || password.length < minPasswordLength || password.length > maxPasswordLength) {
      return res.status(400).json({
        error: `Password must be between ${minPasswordLength} and ${maxPasswordLength} characters`,
      });
    }

    next();

  };




  function validateLogin(req, res, next) {
    const { email, password } = req.body;

     //Email password required
     if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    // Password validation (you can adjust the rules as needed)
    const minPasswordLength = 8;
    const maxPasswordLength = 64;
  
    if (!password || password.length < minPasswordLength || password.length > maxPasswordLength) {
      return res.status(400).json({
        error: `Password must be between ${minPasswordLength} and ${maxPasswordLength} characters`,
      });
    }
  
    
    next();
  };



  const validateUsername = (req, res, next) => {

    // Define the allowed format using a regular expression
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
  
    // Define the minimum and maximum username lengths
    const minUsernameLength = 3;
    const maxUsernameLength = 30;
  
    // Check username length
    if (username.length < minUsernameLength || username.length > maxUsernameLength) {
       return res.status(400).json({ error: 'Enter a valid username' });
    }
  
    // Check username format using the regex
    if (!usernameRegex.test(username)) {
      return res.status(400).json({ error: 'Enter a valid username' });
    }
  
    next();
  };
  
  module.exports = {
    validateRegistration,
    validateLogin,
    validateUsername

  }