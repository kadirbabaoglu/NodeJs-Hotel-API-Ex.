const { getAllHotel , createHotel , updateHotel , deleteHotel , detailHotel , countByTypeHotel , countByTypeCity} = require('../controller/hotel.js')
const express = require('express');
const {verifyAdmin} = require('../middleware/verify.js')

const router = express.Router();

router.get('/getAllHotel' , getAllHotel)
router.post('/createHotel' , verifyAdmin,createHotel)
router.put('/updateHotel/:id' ,verifyAdmin, updateHotel)
router.delete('/deleteHotel/:id' ,verifyAdmin, deleteHotel)
router.get('/detailHotel/:id' , detailHotel)
router.get('/countByTypeHotel' , countByTypeHotel)
router.get('/countByTypeCity' , countByTypeCity)

module.exports = router;