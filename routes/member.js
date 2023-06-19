const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// Add a member to a community
router.post('/', async (req, res) => {
  try {
    const { community, user, role } = req.body;

    // Add the member
    const member = await Member.create({
      community,
      user,
      role,
    });

    res.json({ message: 'Member added successfully', member });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove a member from a community
router.delete('/:id', async (req, res) => {
  try {
    const memberId = req.params.id;

    // Remove the member
    await Member.findByIdAndRemove(memberId);

    res.json({ message: 'Member removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
