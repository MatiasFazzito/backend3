import chai from "chai"
import supertest from "supertest"


const expect = chai.expect
const requester = supertest("http://localhost:8080")

describe("testing de adoptme", () => {
    describe("Test de mascotas", async () => {
        let pets = []
        it("El endpoint POST /api/pets debe crear una mascota correctamente", async () => {
            const petMock = {
                name: "pepe",
                specie: "cat",
                birthDate: "1-1-2024"
            }
            const { _body, ok, statusCode, status } = await requester.post("/api/pets").send(petMock)
            expect(_body.payload).to.have.property("_id")
        })
        it("El endpoint POST /api/pets debe devolver un status 400 a intentar crear una mascota sin un campo obigatorio", async () => {
            const petMock = {
                specie: "cat",
                birthDate: "1-1-2024"
            }
            const { statusCode } = await requester.post("/api/pets").send(petMock)
            expect(statusCode).to.equal(400)
        })
        it("El endpoint GET /api/pets debe devolver el listado de mascotas", async () => {
            const response = await requester.get("/api/pets")
            expect(response.status).to.equal(200)
        })
        it("El endpoint POST /api/pets/withimage debe crear una mascota con imagen", async () => {
            const petMock = {
                name: "pepe",
                specie: "cat",
                birthDate: "1-1-2024"
            }

            const result = await requester.post("/api/pets/withimage").field("name", petMock.name).field("specie", petMock.specie).field("birthDate", petMock.birthDate).attach("image", `./test/tester.jpg`)
            expect(result.status).to.be.equal(200)
            expect(result._body.payload).to.have.property("_id")
            expect(result._body.payload).to.be.ok
        })
    })
})
