// Require
const router = require('express').Router();
const {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  removeFriend,
  addFriend,
} = require('../../controllers/user-controller');

// Get and post user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// Get, Put, and Delete users
router.route('/:userId')
  .get(getUserId)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
