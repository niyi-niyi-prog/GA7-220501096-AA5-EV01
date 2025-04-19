import { Router } from "express";
import getTransaction from "../../controllers/transaction/getTransaction";
import newTransactionController from "../../controllers/transaction/newTransaction.controller";



const transaction = Router()
/**
 * @swagger
 * tags:
 *   name: Income
 *   description: Rutas de ingresos
 */

/**
 * @swagger
 * /api/transaction:
 *   post:
 *     summary: Obtener todos los ingresos
 *     tags: [Income]
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
 *         description: Lista de ingresos
 */
transaction.post('', getTransaction)

/**
 * @swagger
 * /api/transaction/newTransaction:
 *   post:
 *     summary: Obtener todos los ingresos
 *     tags: [Income]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               value:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lista de ingresos
 */

transaction.post('/newTransaction', newTransactionController)

export default transaction