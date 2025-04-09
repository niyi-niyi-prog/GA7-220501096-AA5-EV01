import { Request, Response } from 'express'
import { authenticateUser } from '../services/auth.service'


export const login = async (req: Request, res: Response) => {
  // recibe en el body un usuario y una contraseña
  const { username, password } = req.body

  // procede a conectar el service de authenticateUser
  const result = await authenticateUser(username, password)
  if (result) {
    res.json(result)
  } else {
    res.status(401).json(result)
  }
}
