import chai from "chai"
import supertest from "supertest"


const expect = chai.expect
const requester = supertest("http://localhost:8080")

describe("testing de adoptme", () => {
    describe("Test de usuarios", () => {

        it("El endpoint GET /api/users debe devolver el listado de usuarios", async () => {
            const response = await requester.get("/api/users")
            expect(response.status).to.equal(200)
        })

        it("El endpoint GET /api/users/:uid debe devolver el usuario solicitado", async () => {
            const userMock = {
                first_name: "pepe",
                last_name: "rodriguez",
                email: "get@usertest.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }

            const response = await requester.post("/api/sessions/register").send(userMock)
            expect(response._body.payload).to.have.property("_id")
            const userId = response._body.payload._id

            const { _body, ok, statusCode } = await requester.get(`/api/users/${userId}`)
            expect(ok).to.be.equal(true)
            expect(statusCode).to.be.equal(200)
            expect(_body.payload._id).to.be.equal(userId)
        })

        it("El endpoint PUT /api/users/:uid debe modificar el usuario solicitado", async () => {
            const userMock = {
                first_name: "ejemplo",
                last_name: "ejemplo",
                email: "put@usertest.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }

            const response = await requester.post("/api/sessions/register").send(userMock)
            expect(response._body.payload).to.have.property("_id")
            const userId = response._body.payload._id

            const modifiedUser = {
                ...userMock,
                first_name: 'Juan'
            }

            const updateResponse = await requester.put(`/api/users/${userId}`).send(modifiedUser)
            expect(updateResponse.status).to.equal(200)
            expect(updateResponse._body.message).to.be.equal('User updated')
        })

        it("El endpoint DELETE /api/users/:uid debe eliminar el usuario indicado", async () => {
            const userMock = {
                first_name: "ejemplo",
                last_name: "ejemplo",
                email: "delete@usertest.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }

            const response = await requester.post("/api/sessions/register").send(userMock)
            expect(response._body.payload).to.have.property("_id")
            const userId = response._body.payload._id

            const deleteResponse = await requester.delete(`/api/users/${userId}`)
            expect(deleteResponse.status).to.equal(200)
            expect(deleteResponse._body.message).to.be.equal("User deleted")
        })
    })
})