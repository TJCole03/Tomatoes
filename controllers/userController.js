const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const data = jwt.verify(token, 'secret');
        const user = await User.findOne({ _id: data._id });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next(); 
    } catch (error) {
        res.status(401).send('Not Authorized')
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        newUser.isLoggedIn = true 
        await newUser.save()
        const token = await newUser.generateAuthToken();
        res.json({ newUser, token })
    } catch (error) {
        res.status(400).json({  message: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        //const password = await User.findOne({ password: req.body.password })
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            res.status(400).send('Invalid Credentials')
        } else {
            user.isLoggedIn = true 
            user.save()
            const token = await user.generateAuthToken(); 

            res.json({user, token, message: 'Login Successful!'})
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.logoutUser = async (req, res) => {
    try {
        const user = req.user 
        req.user.isLoggedIn = false 
        req.user.save()
        res.json({ user, message: 'Logged Out'})
    } catch (error) {
        res.status(421).json({ message: error.message })
        }
} 