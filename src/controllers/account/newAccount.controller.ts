import { Request, Response } from 'express'
import newAccountService from '../../services/account/newAccount.service'

const newAccountController = async (req: Request, res: Response) => {
    try {
    const {user, nameAccount} = req.body

    const result = await newAccountService(user, nameAccount)
    if(result){
        res.status(200).json(result)
    }
    res.status(400).json(result)
    } catch (_) {
        res.status(401).json()
    }
}

export default newAccountController