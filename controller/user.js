const User = require('../model/User.js')

const updateUser = async(req, res, next) =>{

    try {
        
        const user = await User.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message : 'Success!! User is updated'})
    }
}

const deleteUser = async(req, res, next) =>{

    try {
        
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message : 'Success!! User is removed'})
    }
}

const detailUser = async(req, res, next) =>{

    try {
        
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message : 'Success!! User is removed'})
    }
}

const allUser = async(req, res, next) =>{

    try {
        
        const user = await User.find()
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message : 'Success!! User is removed'})
    }
}

module.exports = {updateUser , deleteUser , detailUser ,allUser }