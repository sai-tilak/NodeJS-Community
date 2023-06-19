const express = require('express');
const router = express.Router();
const { signup, signin, getMe } = require('../Controllers/auth');

// Sign up
router.post('/signup', signup);

// Sign in
router.post('/signin', signin);

// Get authenticated user
router.get('/me', getMe);

module.exports = router;
