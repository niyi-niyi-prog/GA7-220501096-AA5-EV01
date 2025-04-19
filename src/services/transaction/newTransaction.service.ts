import { AppDataSource } from "../../database"
import { Account } from "../../models/account.entity"
import { Category } from "../../models/category.entity"
import { Transaction } from "../../models/transaction.entity"


const newTransactionService = async (user: string, value: number, category: string): Promise<string | Transaction> => {
    try {
        const accountRepository = AppDataSource.getRepository(Account)
        const accounts = await accountRepository.findOne({ where: { user: { username: user } }, relations: ['user'] })
        if (!accounts) return 'El usuario/cuenta no existe'

        const categoryRepository = AppDataSource.getRepository(Category)
        const categorys = await categoryRepository.findOne({ where: { nameCategory: category } })
        if (!categorys) return 'la categoria no existe'

        const transactionRepository = AppDataSource.getRepository(Transaction)
        const resultTransaction = transactionRepository.create()
        resultTransaction.value = value
        resultTransaction.date = new Date()
        resultTransaction.account = accounts
        resultTransaction.category = categorys

        transactionRepository.save(resultTransaction)

        return resultTransaction


    } catch (_) {
        return 'Error en el servidor'
    }
}

export default newTransactionService