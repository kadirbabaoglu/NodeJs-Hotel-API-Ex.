const {createRoom , updateRoom , deleteRoom , detailRoom , getAllRoom} = require('../controller/room.js');
const express = require('express');
const {verifyAdmin} = require('../middleware/verify.js')

const router = express.Router();

router.post('/createRoom/:id/:hotelid' ,verifyAdmin, createRoom );
router.put('/updateRoom/:id' ,verifyAdmin, updateRoom);
router.delete('/deleteRoom/:id/:hotelid' ,verifyAdmin, deleteRoom);
router.get('detailRoom/:id' , detailRoom);
router.get('/getAllRoom' , getAllRoom);

module.exports = router