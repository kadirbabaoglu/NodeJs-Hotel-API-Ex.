const User = require("../model/User.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req , res , next) => {
    const {username , password , email} = req.body
    try {
        
        const user = await User.findOne(email)
        if(user) res.status(500).json({message : 'User already exists'})
        
        if(password.length < 6 ) res.status(500).json({message : 'Password must be at least 6 characters'})
        const paswordHash = await bcrypt.hash(password , 12)
        
        if(!isEmail(email)) res.status(500).json({message : 'Email is not valid'})

        const newUser = await User.create({...req.body , password : paswordHash})

        const token = await jwt.sign({id : newUser._id , isAdmin : newUser.isAdmin} , 'SECRET_KEY' , {expiresIn : '1h'})

        res.cookie('token' , token , {httpOnly : true}).status(201).json({token , newUser})

    } catch (error) {
        res.status(500).json({message : error})
    }
}

const login = async(req , res , next) => {
    const {password , email} = req.body
    try {
        
        const user = await User.findOne(email)
        if(!user) res.status(500).json({message : 'User not founded'})
        
        const paswordcompare = await bcrypt.compare(password , user.password)
        
        if(!paswordcompare) res.status(500).json({message : 'Password does not match'})


        const token = await jwt.sign({id : user._id , isAdmin : user.isAdmin} , 'SECRET_KEY' , {expiresIn : '1h'})

        res.cookie('token' , token , {httpOnly : true}).status(201).json({token , user})

    } catch (error) {
        res.status(500).json({message : error})
    }
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailAdress.match(regex))
        return true
    else
        return false
}

module.exports = {register , login}