const mongoose = require('mongoose');

// Local connection to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/socialmediaDB',  {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
);

// Export MongoDB connection 
module.exports = mongoose.connection;