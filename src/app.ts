import express from 'express'
import authRoutes from './routes/auth.routes'
import { AppDataSource } from './database'

const app = express()


//procede a ejecutar la aplicacion
app.use(express.json())
app.use('/api/auth', authRoutes)


//inicializa la conexion a base de datos
AppDataSource.initialize()
    .then(() => {
        console.log('📦 Conectado a la base de datos con TypeORM')
    })
    .catch((error) => console.error('Error al conectar a la DB:', error))

export default app
