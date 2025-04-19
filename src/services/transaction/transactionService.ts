
import { AppDataSource } from "../../database"
import { Transaction } from "../../models/transaction.entity"

const getTransactionService = async (userid: string): Promise<Transaction[] | null> => {
    try {

        const transactionRepository = AppDataSource.getRepository(Transaction)
        const transactionResult = await transactionRepository.find({
            //   where: {account:{user: { id: userid}}},
            relations: ['account.user', 'category']

        })
        if (transactionResult) {
            return transactionResult
        }
        return null

    } catch (_) {
        return null
    }
}

export default getTransactionService