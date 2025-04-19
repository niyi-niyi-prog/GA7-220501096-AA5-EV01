import { Request, Response } from 'express'
import getCartegoryService from '../../services/category/getCartegory.service'

const getCategoryController = async (req: Request, res: Response) => {
try{
    const result = await getCartegoryService()

    res.status(200).json(result)
}catch(_){
    res.status(500).json()
}
}

export default getCategoryController