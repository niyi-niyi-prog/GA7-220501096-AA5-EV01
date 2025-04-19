import { Request, Response } from 'express'
import newCategoryService from '../../services/category/newCategory.service'


const newCategoryController = async (req: Request, res: Response) => {
    try {
        const result = await newCategoryService(req.body.category)
        res.status(200).json(result)
    } catch (_) {
        res.status(401).json()
    }
}

export default newCategoryController