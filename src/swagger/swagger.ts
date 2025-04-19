import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cash-Flow-Hogar API',
            version: '1.0.0',
            description: 'API para la gestión financiera del hogar'
        },
        servers: [{ url: 'http://localhost:3000' }],
    },
    apis: ['./src/routes/**/*.ts'], // 👈 escanea todas tus rutas
})
