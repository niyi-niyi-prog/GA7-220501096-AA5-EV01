import { Request, Response } from 'express'
import newTransactionService from '../../services/transaction/newTransaction.service'

const newTransactionController = async (req: Request, res: Response) => {
    try {
        const result = await newTransactionService(
            req.body.user,
            req.body.value,
            req.body.category
        )

        res.status(200).json(result)

    } catch (_) {
        res.status(500).json({ message: 'Error guardar los ingresos' })
    }
}

export default newTransactionController