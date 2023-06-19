const Member = require('../models/member');
const User = require('../models/user');

const addMember = async (req, res) => {
  try {
    const { communityId, userId, roleId } = req.body;

    // Create the member
    const member = await Member.create({ community: communityId, user: userId, role: roleId });

    res.json({ message: 'Member added successfully', member });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const removeMember = async (req, res) => {
  try {
    const memberId = req.params.id;

    // Delete the member
    await Member.findByIdAndDelete(memberId);

    res.json({ message: 'Member removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addMember, removeMember };
