import { Router } from 'express'
import newCategoryController from '../../controllers/category/newCategory.controller'
import getCategoryController from '../../controllers/category/getCategory.controller'



/**
 * @swagger
 * tags:
 *   name: category
 *   description: Rutas de Categorias
 */
const category = Router()


/**
 * @swagger
 * /api/category/:
 *   get:
 *     summary: consulta de categorias
 *     tags: [category]
 *     responses:
 *       200:
 *         description: Se ha generado nuevas categorias
 */

category.get('/', getCategoryController)



/**
 * @swagger
 * /api/category/newCategory:
*   post:
 *     summary: crear nueva  categoria
 *     tags: [category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Se ha creado nueva categoria
 */
category.post('/newCategory', newCategoryController)


export default category
