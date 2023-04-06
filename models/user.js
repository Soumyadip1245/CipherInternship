const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    about: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    highested: { type: String, default: "" },
    currently: { type: String, default: "" },
    interest: { type: Array, default: [] },
    followers: { type: Array, default: [] }
})
module.exports = mongoose.model('User', userSchema)