import { User } from '../../models/user.entity'
import bcrypt from 'bcrypt'
import { AppDataSource } from '../../database'


export const registerUser = async (data: User) => {

  // conexion a la base de datos por medio del getRepository
  const userRepository = AppDataSource.getRepository(User)
  const hashedPassword = await bcrypt.hash(data.password, 10)

  //valida que el usuario no exista
  const userExist = await userRepository.findOne({where:{username: data.username}})

  if(userExist){
   return { message: 'Usuario ya Existe'}
  } else {
    //procede a crear un usuario nuevo
    const user = new User()
    user.username = data.username
    user.password = hashedPassword
    user.name = data.name
    user.document = data.document
  
  
    await userRepository.save(user)
  
  
    return { message: 'Usuario registrado con éxito' }
  }

}
