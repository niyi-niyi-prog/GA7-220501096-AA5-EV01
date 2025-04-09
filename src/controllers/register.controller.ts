import { Request, Response } from 'express'
import { registerUser } from '../services/registerUser'

// controlador de registro el cual recibira en el body el usuario y la contraseña

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body

  // conexion al service de registerUser
  const result = await registerUser(username, password)
  res.status(201).json(result)
}