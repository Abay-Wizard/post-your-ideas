import express from 'express'
import {signUpUser} from '../../controllers/userController.js'

const router= express.Router()

router.post('/',signUpUser)



export default router