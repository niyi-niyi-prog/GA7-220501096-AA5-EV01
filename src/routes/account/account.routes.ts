import { Router } from "express"
import newAccountController from "../../controllers/account/newAccount.controller"
import getAccountController from "../../controllers/account/getAccount.controller"

const account = Router()

/**
 * @swagger
 * tags:
 *   name: account
 *   description: Rutas de cuentas
 */

/**
 * @swagger
 * /api/account/:
 *   post:
 *     summary: Obtener todos las cuentas
 *     tags: [account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lista de cuentas
 */

account.post('/', getAccountController)


/**
 * @swagger
 * /api/account/newAccound:
 *   post:
 *     summary: Crear las cuentas
 *     tags: [account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               nameAccount:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agregar nueva cuentas
 */
account.post('/newAccound', newAccountController)



export default account 