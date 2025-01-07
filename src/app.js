import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import specs from './utils/swagger.js'
import swaggerUIExpress from "swagger-ui-express"
import usersRouter from './routes/users.router.js'
import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import mockingRouter from './routes/mocks.router.js'

process.loadEnvFile()

const URLMongo = process.env.URLMONGO

const app = express()
const PORT = process.env.PORT || 8080
const connection = mongoose.connect(URLMongo)
app.use('/apidocs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs))

app.use(express.json())
app.use(cookieParser())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/api/adoptions', adoptionsRouter)
app.use('/api/sessions', sessionsRouter)
app.use('/api/mocks', mockingRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
