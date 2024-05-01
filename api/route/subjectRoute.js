const express = require('express')
const router = express.Router()
const { handleAddSubject } = require('../controller/subjectController')

router.post("/addSub", handleAddSubject)


module.exports = router
