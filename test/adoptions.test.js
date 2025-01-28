import chai from "chai"
import supertest from "supertest"

const expect = chai.expect
const requester = supertest("http://localhost:8080")

describe("testing de adoptme", () => {
    describe("Test de adopciones", async () => {

        it("El endpoint POST /api/adoptions/:uid/:pid debe crear una adopcion nueva correctamente", async () => {
            const petMock = {
                name: "pepe",
                specie: "cat",
                birthDate: "1-1-2024"
            }

            const responsePet = await requester.post("/api/pets").send(petMock)
            expect(responsePet._body.payload).to.have.property("_id")
            const petId = responsePet._body.payload._id

            const userMock = {
                first_name: "pepe",
                last_name: "rodriguez",
                email: "supertest@hotmail.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }

            const responseUser = await requester.post("/api/sessions/register").send(userMock)
            expect(responseUser).to.be.ok
            const userId = responseUser._body.payload._id

            const adoptionMock = {
                owner: userId,
                pet: petId
            }

            const response = await requester.post(`/api/adoptions/${userId}/${petId}`).send(adoptionMock)
            expect(response._body.status).to.be.equal("success")
            expect(response._body.message).to.be.equal("Pet adopted")
        })

        it("El endpoint GET /api/adoptions debe devolver el listado de adopciones correctamente", async () => {
            const response = await requester.get("/api/adoptions")
            expect(response.status).to.equal(200)
        })

        it("El endpoint GET /api/adoptions/aid debe devolver la adopcion indicada correctamente", async () => {
            const petMock = {
                name: "pepe",
                specie: "cat",
                birthDate: "1-1-2024"
            }

            const responsePet = await requester.post("/api/pets").send(petMock)
            expect(responsePet._body.payload).to.have.property("_id")
            const petId = responsePet._body.payload._id

            const userMock = {
                first_name: "pepe",
                last_name: "rodriguez",
                email: "supertest@supertest.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }

            const responseUser = await requester.post("/api/sessions/register").send(userMock)
            expect(responseUser).to.be.ok
            const userId = responseUser._body.payload._id

            const adoptionMock = {
                owner: userId,
                pet: petId
            }

            const responseAdoption = await requester.post(`/api/adoptions/${userId}/${petId}`).send(adoptionMock)
            const adoptionId = responseAdoption._body.payload._id
            const response = await requester.get(`/api/adoptions/${adoptionId}`)
            expect(response.body.status).to.equal("success")
            expect(response.body.payload).to.have.property("_id")
        })

    })
})
