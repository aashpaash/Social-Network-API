// Require
const { Schema, model, Types } = require('mongoose');


// Reaction Schema
const reactionSchema = new Schema(
    {

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toISOString(),
        },
    },
    {
       toJSON: {
        getters: true,
       },
    }
);

// Initialize model
const Reaction = model('Reaction', reactionSchema);

// Export module
module.exports = Reaction;