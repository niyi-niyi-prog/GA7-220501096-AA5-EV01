import { Request, Response } from 'express'
import getAccountService from '../../services/account/getAccount.service'

const getAccountController = async (req: Request, res: Response) => {
try{
  const result  = await getAccountService(req.body.user)

    res.status(200).json(result)
}catch(_){
    res.status(500).json()
}
}

export default getAccountController