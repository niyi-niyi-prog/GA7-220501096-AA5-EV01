import { Request, Response } from 'express'
import getTransactionService from '../../services/transaction/transactionService'


const getTransaction = async (req: Request, res: Response) => {
    try {
        const userid = req.body.user

        const result = await getTransactionService(userid)
        res.status(200).json(result)

    } catch (_) {
        res.status(500).json({ message: 'Error al obtener los ingresos' })
    }

}

export default getTransaction