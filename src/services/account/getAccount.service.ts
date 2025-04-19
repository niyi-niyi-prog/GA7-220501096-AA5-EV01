import { AppDataSource } from "../../database"
import { Account } from "../../models/account.entity"
import { User } from "../../models/user.entity"


const getAccountService = async (username: string): Promise<string | Account[]> => {
    try {
        const accountRepository = AppDataSource.getRepository(Account)
        const userRespository = AppDataSource.getRepository(User)
        const users = await userRespository.findOne({
            where: { username: username }
        })
        if (!users) return 'user_not_found'
        const result = accountRepository.find({
            where: { user: { id: users.id } },
            relations: ['user']
        })
        if (result) return result

        return 'account_not_found'
    } catch (_) {
        return 'error'
    }
}

export default getAccountService