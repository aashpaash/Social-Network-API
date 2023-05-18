// Required
const { Schema, model } = require("mongoose");

// User schema
const userSchema = new Schema(
    {
        username: { 
            type: String,
            reqiured: true,
            trim: true,
            unique: true
        },
        
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/],
            unique: true,
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref:"Thought"
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
        }
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

userSchema.virtuals('friendCount').get(function () {
    return this.friends.length;
});

// Initialize model
const User = model('User', User);

// Export module
module.exports - User;
