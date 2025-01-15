import swaggerJSDoc from "swagger-jsdoc"
import __dirname from "./index.js"

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentacion de aplicacion para adopcion de mascotas",
            description: "API de adopcion de mascotas"
        }
    },
    apis: [`${__dirname}/../docs/**/*.yaml`]
}

const specs = swaggerJSDoc(swaggerOptions)

export default specs