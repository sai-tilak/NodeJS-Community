const express = require('express');
const router = express.Router();
const Community = require('../models/community');
const Member = require('../models/member');

// Create a community
router.post('/', async (req, res) => {
  try {
    const { name, slug, owner } = req.body;

    // Create the community
    const community = await Community.create({
      name,
      slug,
      owner,
    });

    res.json({ message: 'Community created successfully', community });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all communities
router.get('/', async (req, res) => {
  try {
    const communities = await Community.find();
    res.json({ communities });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all members of a community
router.get('/:id/members', async (req, res) => {
  try {
    const communityId = req.params.id;
    const members = await Member.find({ community: communityId }).populate('user');
    res.json({ members });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get communities owned by the authenticated user
router.get('/me/owner', async (req, res) => {
  try {
    const userId = req.user.userId;
    const communities = await Community.find({ owner: userId });
    res.json({ communities });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
