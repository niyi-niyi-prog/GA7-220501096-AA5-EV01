
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppDataSource } from '../../database'
import { User } from '../../models/user.entity'


export const authenticateUser = async (username: string, password: string) => {
  //realiza conexion al models
  const userRepository = AppDataSource.getRepository(User)
  //consulta el usuario en la base de datos
  const user = await userRepository.findOne({
    where: { username }
  })

  //valida que el usuario no exista
  if (!user) {
    return { message: 'Usuario no encontrado' }
  }

  //desencripta la contraseña
  const isValidPassword = await bcrypt.compare(password, user.password);
  //valida que la contraseña sea la correcta
  if (!isValidPassword) {
    return { message: 'Contraseña incorrecta' }
  }

  // procede a generar un token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET || 'tu_clave_secreta',
    { expiresIn: '1h' }
  )

  return { token }
}
