const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.Mongo_Uri, {
        
    })
    .then(()=>{
        console.log('Database Connetion Success')
    })
    .catch((error)=>{
        console.log(`Database Connetion error :  ${error}`)
    })
}

module.exports = db;