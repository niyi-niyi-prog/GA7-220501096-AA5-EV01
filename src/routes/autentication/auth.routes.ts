import { Router } from 'express'
import { login } from '../../controllers/autentication/auth.controller'
import { register } from '../../controllers/autentication/register.controller'

const router = Router()
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Rutas de autenticacion
 */

/**
 * @swagger
 * /api/auth/register:
*   post:
 *     summary: Generar registro de un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               document:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro de nuevos usuarios
 */
router.post('/register', register)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary:  Generar el logueo de un usuario registrado
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description:  Generar el logueo de un usuario registrado
 */

router.post('/login', login)

export default router
