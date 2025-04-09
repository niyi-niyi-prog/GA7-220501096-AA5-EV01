import { User } from '../models/user.entity'
import bcrypt from 'bcrypt'
import { AppDataSource } from '../database'


export const registerUser = async (username: string, password: string) => {

  // conexion a la base de datos por medio del getRepository
  const userRepository = AppDataSource.getRepository(User)
  const hashedPassword = await bcrypt.hash(password, 10)

  //valida que el usuario no exista
  const userExist = await userRepository.findOne({where:{username}})

  if(userExist){
   return { message: 'Usuario ya Existe'}
  } else {
    //procede a crear un usuario nuevo
    const user = new User()
    user.username = username
    user.password = hashedPassword
  
  
    await userRepository.save(user)
  
  
    return { message: 'Usuario registrado con éxito' }
  }

}
