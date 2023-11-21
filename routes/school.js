const express = require('express')

const router = express.Router()

const schoolController = require('../controllers/school')

router.get('/:name', schoolController.getSchoolByName)
router.get('/:name/students', schoolController.getSchoolStudents)
router.get('/:name/courses', schoolController.getSchoolCourses)

module.exports = router