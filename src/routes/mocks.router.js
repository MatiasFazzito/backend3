import { Router } from "express"
import { generatePet, generateUser } from "../utils/faker.js"
import userModel from "../dao/models/User.js"
import petModel from "../dao/models/Pet.js"


const router = Router()

router.get('/mockingpets', (req, res) => {
    const mockedPets = generatePet(100)
    res.json(mockedPets)
})

router.get('/mockingusers', (req, res) => {
    const mockedUsers = generateUser(50)
    res.json(mockedUsers)
})

router.post('/generatedata', async (req, res) => {
    const { users, pets } = req.body;

    try {
        // Generar usuarios
        const generatedUsers = generateUser(users)
        const createdUsers = await userModel.insertMany(generatedUsers)

        // Generar mascotas
        const generatedPets = generatePet(pets)
        const createdPets = await petModel.insertMany(generatedPets)

        res.status(201).json({
            message: 'Datos generados correctamente',
            users: createdUsers,
            pets: createdPets
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al generar los datos' })
    }
})

export default router