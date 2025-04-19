import { AppDataSource } from "../../database"
import { Account } from "../../models/account.entity"
import { User } from "../../models/user.entity"

const newAccountService = async (user: string, nameAccount: string): Promise<string> => {
    try {
        const accountRepository = AppDataSource.getRepository(Account)
        const userRespository = AppDataSource.getRepository(User)
        const resultAccount = await accountRepository.findOne({
            where: { nameAccount: nameAccount }
        })

        if (resultAccount) return 'La cuenta ya existe'

        const users = await userRespository.findOne({
            where: { username: user }
        })
        if (!users) return 'usuario no existe'

        const newAccound = accountRepository.create()
        newAccound.nameAccount = nameAccount
        newAccound.user = users
        await  accountRepository.save(newAccound)

        return 'Se Ha creado la cuenta existosamente'

    } catch (_) {
        return 'error al crear la cuenta'
    }

}

export default newAccountService