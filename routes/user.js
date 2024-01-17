const {updateUser , deleteUser , detailUser ,allUser } = require('../controller/user')
const express = require('express');
const {verifyAdmin , verifyUser} = require('../middleware/verify.js')

const router = express.Router();

router.get('/allUser' ,verifyAdmin, allUser)
router.delete('/deleteUser/:id' ,verifyUser, allUser)
router.get('/detailUser/:id' ,verifyUser, allUser)
router.put('/updateUser/:id' ,verifyUser, allUser)

module.exports = router