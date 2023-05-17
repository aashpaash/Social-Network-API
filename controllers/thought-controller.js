// Required
const {Thoughts, Users} = require('../models');

// All Thoughts
const thoughtController = {
    async getAllThoughts(req, res) {
    try {
    const dbThoughtData = await Thoughts.find().sort({ createdAt: -1 });
    res.json(dbThoughtData);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
    }
};

// Get thought by ID
getThoughtId(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(400).json({ message: 'Try again. No thought was found with this ID.' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}

// Create a new thought
createThought(req, res) {
    Thoughts.create(body)
    .then((dbThoughtData) => {
        return Users.findOneAndUpdate(
            {_id: body.userId},
            {$push: {thoughts: dbThoughtData._id}},
            {new: true}
        );
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            return res.status(404).json(
                { message: 'User and thought combo  are not found' }
            );
        }
        res.json(
            {message: 'Thought has been successfully created'}
        )
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json(err);
    })
}

// Update thought
updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Unable to update thought' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
    }
  
  



    