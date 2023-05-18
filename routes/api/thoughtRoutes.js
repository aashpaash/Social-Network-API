// Require
const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtId,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

router.route('/')
.get(getAllThoughts)
.post(createThought);

router.route('/:thoughtId')
.get(getThoughtId)
.put(updateThought)
.delete(deleteThought);



// Export module
module.exports = router;