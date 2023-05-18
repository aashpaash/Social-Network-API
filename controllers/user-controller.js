// Required
const { User, Thought } = require('../models');

const userController = {
  // Get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({ path: "thoughts", select: "-__v" })
            .populate({ path: "friends", select: "-__v" })
            .select("-__v")
            .then((dbUsersData) => res.json(dbUsersData))
            .catch((err) => {
            console.log(err);
            res.status(500).json(err);
            });
    },

    // Get user by ID
    getUserId({req, res) {
     User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
          .status(404)
          .json({ message: 'Unable to complete action' });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
    // Create user
    createUser(req, res) {
        User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update user
  updateUser(req, res) {
    User.findOneAndUpdate(
        {_id: req.params.userId},
      req.body,
      {new: true},
      {runValidators: true},

    )}
    .then((dbUserData) => {
        if (!dbUserData) {
            return res
            .status(404)
            .json({message: "Unable to complete action."});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(err))
  }

  // Delete user
  deleteUser(req, res) {
    User.findOneAndDelete(
        {_id: req.params.userId},
        req.body,
        {new: true},
        {runValidators: true},)
        .then((dbUserData) => {
            if (!dbUserData) {
                return res
                .status(404)
                .json({message: "Unable to complete action."});
            }
            return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
        })
        .then(() => {
          res.json({ message: 'Successfully deleted!' });
        })
        .catch((err) => res.json(err));
    }










module.exports = userController;