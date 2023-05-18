// Require
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Add routes
router.use('/thoughts', thoughtRoutes)
router.use('/user', userRoutes);

// Export module
module.exports = router;