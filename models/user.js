const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.pre('save', async function (next) {
        this.isModified('password')
        this.password = await bcrypt.hash(this.password, 8)
        null;
        next()
})

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, 'secret')
    return token
};

const User = mongoose.model('User', userSchema); 

module.exports = User; 