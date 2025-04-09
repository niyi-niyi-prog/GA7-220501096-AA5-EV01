import { Router } from 'express'
import { login } from '../controllers/auth.controller'
import { register } from '../controllers/register.controller'

const router = Router()


//conexion al controlador de registro
router.post('/register', register)

// conexion al controlador de ingreso
router.post('/login', login)

export default router
