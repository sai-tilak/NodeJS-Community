const Community = require('../models/community');
const User = require('../models/user');

const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json({ communities });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createCommunity = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const owner = req.user.userId;

    // Create the community
    const community = await Community.create({ name, slug, owner });

    res.json({ message: 'Community created successfully', community });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const communityId = req.params.id;

    // Find the community
    const community = await Community.findById(communityId);

    // Find all members of the community
    const members = await Member.find({ community: communityId }).populate('user', 'name email');

    res.json({ community, members });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMyOwnedCommunities = async (req, res) => {
  try {
    const ownerId = req.user.userId;

    // Find communities owned by the user
    const communities = await Community.find({ owner: ownerId });

    res.json({ communities });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMyJoinedCommunities = async (req, res) => {
  try {
    const memberId = req.user.userId;

    // Find communities where the user is a member
    const communities = await Member.find({ user: memberId }).populate('community', 'name');

    res.json({ communities });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllCommunities, createCommunity, getAllMembers, getMyOwnedCommunities, getMyJoinedCommunities };
