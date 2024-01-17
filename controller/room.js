const Hotel = require('../model/Hotel.js')
const Room = require('../model/Room.js')

const createRoom = async(req , res , next) => {
    const HotelId = req.params.Hotelid
    try {
        const room = await Room.create(req.body);
        await Hotel.findByIdAndUpdate(HotelId , {$push : {rooms : room._id}})
        res.status(201).json(room)
    } catch (error) {
      res.status(400).json({message : error})
    }
}

const updateRoom = async(req , res , next) => {
    try {
        
        const room = await Room.findByIdAndUpdate(req.params.id , {$set : req.body},{new : true})
        res.status(201).json(room)
    } catch (error) {
      res.status(400).json({message : error})
    }
}

const deleteRoom = async(req , res , next) => {
    const HotelId = req.params.Hotelid
    try {
        await Room.findByIdAndDelete(req.params.id , {$set : req.body},{new : true})
        res.status(201).json({message : 'oda silme işlemi başarılı'})
    } catch (error) {
      res.status(400).json({message : error})
    }
}

const detailRoom = async(req , res , next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(201).json(room)
    } catch (error) {
      res.status(400).json({message : error})
    }
}

const getAllRoom = async(req , res , next) => {
    try {
        const room = await Room.find()
        res.status(201).json(room)
    } catch (error) {
      res.status(400).json({message : error})
    }
}

module.exports = {createRoom , updateRoom , deleteRoom , detailRoom , getAllRoom}