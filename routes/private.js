const express = require('express')
const router = express.Router()
const { getPrivateData } = require("../controller/private")

//in order to protect we brought here
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getPrivateData)

module.exports = router