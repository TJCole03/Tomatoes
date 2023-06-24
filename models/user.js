const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName: { type: String, require: true }, 
    password: { type: String, require: true }
    
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, 'secret')
    return token
};

const User = mongoose.model('User', userSchema); 

module.exports = User; 