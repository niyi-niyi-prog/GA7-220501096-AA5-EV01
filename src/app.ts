import express from 'express'
import { AppDataSource } from './database'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger/swagger'
import authRoutes from './routes/autentication/auth.routes'
import incomeRoutes from './routes/transaction/transaction.routes'
import account from './routes/account/account.routes'
import category from './routes/category/category.routes'
import transaction from './routes/transaction/transaction.routes'
import { loadRoutes } from './utils/loadRoutes'


const app = express()


//procede a ejecutar la aplicacion
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api/auth', authRoutes)
app.use('/api/account', account)
app.use('/api/category', category)
app.use('/api/transaction', transaction)



loadRoutes(app)

//inicializa la conexion a base de datos
AppDataSource.initialize()
    .then(() => {
        console.log('📦 Conectado a la base de datos con TypeORM')
    })
    .catch((error) => console.error('Error al conectar a la DB:', error))

export default app
