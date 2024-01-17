const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.cookies.token
    if(!token) res.status(404).json({message : 'Must bu login'})

    jwt.verify(token , 'SECRET_KEY' , (error , user) => {
        if(error) res.status(404).json({message : 'Invalid Token'})
        req.user = user
        next()
    })
}

const verifyUser = (req,res,next) => {
    verifyToken(req,res,next ,() => {
        if(req.user.id == req.param.id || req.user.isAdmin ) {
            next()
        }else{
            res.status(404).json({message : 'Must bu login'})
        }
    })
}

const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next ,() => {
        if(req.user.isAdmin ) {
            next()
        }else{
            res.status(404).json({message : 'You are not Admin'})
        }
    })
}

module.exports = {verifyAdmin , verifyToken , verifyUser}