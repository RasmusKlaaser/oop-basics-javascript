const express = require('express')

const router = express.Router()

const studentController = require('../controllers/student')

router.get('/:name', studentController.getStudentByName)
router.get('/:name/grades', studentController.getStudentGrades)

module.exports = router