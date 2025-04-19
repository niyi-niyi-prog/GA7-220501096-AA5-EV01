import { Request, Response } from 'express'
import { registerUser } from '../../services/autentication/registerUser'
import { User } from '../../models/user.entity'

// controlador de registro el cual recibira en el body el usuario y la contraseña

export const register = async (req: Request, res: Response) => {
 // const { username, password, name, document } = req.body

 const person: User = {
  username: req.body.username,
  password: req.body.password,
  name: req.body.name,
  document: req.body.document,
 }

  // conexion al service de registerUser
  const result = await registerUser(person)
  res.status(201).json(result)
}