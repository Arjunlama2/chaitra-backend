const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures usernames are unique
        trim: true,       // Removes leading/trailing whitespace
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // Stores email in lowercase
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Basic email validation
        validate:(data)=>{
//checck if already in use
        }
    },
    password: {
        type: String,
        required: true,
        
    },
    firstName: {
        type: String,
        required: false, // Not every user might provide their first name
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        maxlength: 50
    },
    dateOfBirth: {
        type: Date,
        required: false //  Consider adding validation logic for reasonable dates
    },
    profilePicture: { //Stores URL
        type: String,
        required: false,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'], // Restricts values to these
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    
},{
    timestamps:true
});


const User = mongoose.model('User', userSchema);

module.exports = User;
