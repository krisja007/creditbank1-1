const express = require('express')
const router = express.Router()
const { handleRegister } = require('../controller/registerController')

router.post('/registerData', handleRegister)


module.exports = router
