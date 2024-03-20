const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const {
     getDoctorInfoController, 
     updateProfileController, 
     getDoctorByIdController, 
     doctorAppointmentsController,
     updateStatusController, 
    } = require('../controllers/doctorCtrl')

const router = express.Router()

//POST single doc info
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController)

//POST update profile
router.post('/updateProfile', authMiddleware, updateProfileController)

//POST Get single doc info
router.post('/getDoctorById', authMiddleware ,getDoctorByIdController)

//GET appointments
router.get('/doctor-appointments', authMiddleware, doctorAppointmentsController)

//POST update status
router.post('/update-status', authMiddleware, updateStatusController) 

module.exports = router
