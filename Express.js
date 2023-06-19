const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/community-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const communityRoutes = require('./routes/community');
const memberRoutes = require('./routes/member');

app.use('/v1/auth', authRoutes);
app.use('/v1/community', communityRoutes);
app.use('/v1/member', memberRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
