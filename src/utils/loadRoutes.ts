import { Express } from 'express'
import fs from 'fs'
import path from 'path'

export const loadRoutes = (app: Express, routesPath: string = path.join(__dirname, '../routes')) => {
    const folders = fs.readdirSync(routesPath)

    folders.forEach((folder) => {
        const routeFile = path.join(routesPath, folder, `${folder}.routes.ts`)

        if (fs.existsSync(routeFile)) {
            const route = require(routeFile)
            app.use(`/api/${folder}`, route.default)
            console.log(`✅ Ruta cargada: ${folder}`)
        }
    })
}
