const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    //Name/Familly info
    name: {
        type: String,
        required: [true, 'Please enter your full name.']
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Information must belong to a User!']
    },

    dobMonth: {
        type: String,
        required: [true, 'Please provide your birth month. If you do not know, please type N/A']
    },

    dobDay: {
        type: String,
        required: [true, 'Please provide the day of the month you were born. If you do not know, please type N/A']
    },

    dobYear: {
        type: String,
        required: [true, 'Please provide the year you were born. If you do not know, please type N/A']
    },

    age: {
        type: Number,
        required: [true, 'Please provide your age. If you do not know, please type N/A']
    },
    
    gender: {
        type: String,
        required: [true, 'Please provide your gender. If you do not wish to say your gender, please select options 3 or 4.'],
        enum: {
            values: ['male', 'female', 'other', 'I do not wish to provide'],message: 'Gender is either: male, female, other, I do not wish to provide'
        }
    },

    phoneNumber: String,
    
    familyName: {
        type: String,
        required: [true, 'Please enter your family name.']
    },

    firstName: {
        type: String,
        required: [true, 'Please enter your first name.']
    },

    spouse: {
        type: String,
        required: [true, `Please enter your spouse's/spouses' name. If you have no spouse and are single, enter "N/A".`]
    },

    mother: String,

    father: String,

    siblings: String,

    //Where from info
    town: {
        type: String,
        required: [true, 'Please enter the town/village you are from.']
    },

    city: {
        type: String,
        required: [true, 'Please enter the city you are from.']
    },

    province: {
        type: String,
        required: [true, 'Please enter the province you are from.']
    },

    //Education info
    university: String,

    universityGradYear: String,

    //Certification info
    certification: String,

    certificationYear: String,

    //Employment info
    occupation: {
        type: String,
        required: [true, 'Please enter your occupation.']
    },

    occupationYears: {
        type: Number,
        required: [true, 'Please enter how many years you have served in your occupation.']
    },

    occupation2: String,

    occupation2Years: Number,

    //Skills info
    skills: String,

    //References info
    reference1: {
        type: String,
        required: [true, 'Please enter a reference.']
    },

    reference2: String,

    //Admin assistance info
    admin: String,
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo