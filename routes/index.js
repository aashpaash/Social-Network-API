// Require
const router = require('express')
const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Invalid route');
});

// Export module
module.exports = router;
