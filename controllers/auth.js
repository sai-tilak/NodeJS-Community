const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // If user not found or password is incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your_secret_key');

    res.json({ message: 'User signed in successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMe = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find the user by ID
    const user = await User.findByPk(userId);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup, signin, getMe };
