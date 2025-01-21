import chai from "chai"
import supertest from "supertest"


const expect = chai.expect
const requester = supertest("http://localhost:8080")

describe("testing de adoptme", ()=>{
    describe("Test de session", () => {
        let cookie

        it("El endpoint POST /api/sessions/register debe registrar un usuario correctamente", async () => {
            const userMock= {
                first_name: "pepe",
                last_name: "rodriguez",
                email: "supertest@gmail.com", /*Cambiar el email cada vez que se haga un test para evitar conflicto con la base de datos*/
                password: "123456"
            }
            const {_body} = await requester.post("/api/sessions/register").send(userMock)
            expect(_body).to.be.ok
        })

        it("El endpoint POST /api/session/login debe devolver una cookie al loguear un usuario registrado", async () => {
            const userMock= {
                email: "supertest@gmail.com",
                password: "123456"
            }
            const result = await requester.post("/api/sessions/login").send(userMock)
            const cookieResult = result.headers["set-cookie"][0]
            expect(cookieResult).to.be.ok

            cookie= {
                name: cookieResult.split("=")[0],
                value: cookieResult.split("=")[1]
            }

            expect(cookie.name).to.be.ok.and.equal("coderCookie")
            expect(cookie.value).to.be.ok
        })

        it("El endpoint GET /api/sessions/current debe recibir una cookie y devolver el usuario que corresponde", async () => {
            const {_body} = await requester.get("/api/sessions/current").set("Cookie", [`${cookie.name}=${cookie.value}`])
            expect(_body.payload.email).to.be.equal("supertest@gmail.com")
        })
    })
})