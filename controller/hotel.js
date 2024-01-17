const { query } = require('express');
const Hotel = require('../model/Hotel.js')
const Room = require('../model/Room.js')

const createHotel = async(req , res , next) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel)
    } catch (error) {
      res.status(400).json({message : error})
    }
}

const updateHotel = async(req , res , next) => {
  try {
      const hotel = await Hotel.findByIdAndUpdate(req.params._id , req.body._id , {new : true});
      res.status(201).json(hotel)
  } catch (error) {
    res.status(400).json({message : error})
  }
}

const deleteHotel = async(req , res , next) => {
  try {
      await Hotel.findByIdAndDelete(req.params._id);
      res.status(201).json({message : 'delete items'})
  } catch (error) {
    res.status(400).json({message : error})
  }
}

const detailHotel = async(req , res , next) => {
  try {
      const hotel = await Hotel.findById(req.params._id);
      res.status(201).json(hotel)
  } catch (error) {
    res.status(400).json({message : error})
  }
}


const getAllHotel = async(req , res , next) => {
  const { min , max , ...other} = req.query
  try {
      const hotel = await Hotel.findById({
        ...other,
        price : {$gt : min | 1 , $lt : max | 999}
      }).limit(req.query.limit);
      res.status(201).json(hotel)
  } catch (error) {
    res.status(400).json({message : error})
  }
}

const countByTypeHotel = async(req , res , next) => {
  try {
      const hotel = await Hotel.countDocuments({type : 'hotel'});
      const villa = await Hotel.countDocuments({type : 'villa'});
      res.status(201).json([
        {type : 'hotel' , count : hotel},
        {type : 'villa' , count : villa}
      ])
  } catch (error) {
    res.status(400).json({message : error})
  }
}

const countByTypeCity = async(req , res , next) => {
  try {
      const cities = req.query.cities.split(',')
      const hotel = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({city : city})
      })
      ) 
      res.status(201).json(hotel)
  } catch (error) {
    res.status(400).json({message : error})
  }
}

module.exports = { getAllHotel, createHotel , updateHotel , deleteHotel , detailHotel , countByTypeHotel , countByTypeCity}