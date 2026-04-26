const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here we simulate sending an email or saving to a database
  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  
  // Respond with success
  res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

module.exports = router;
