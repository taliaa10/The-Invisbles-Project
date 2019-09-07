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
    
    familyName: {
        type: String,
        required: [true, 'Please enter your given family name.']
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
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo