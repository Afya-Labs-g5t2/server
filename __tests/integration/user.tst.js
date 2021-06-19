const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");


describe("Usuario", () => {
    
    it("post novo usuario", async() => {

        const response = await request(app)
            .post("/usuarios")
            .send({
                login: "adminix",
                senha: "adminix",
                nome: "adminix"
            })

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    // it("ERROR post novo usuario", async() => {

    //     const response = await request(app)
    //         .post("/usuarios")
    //         .send({
    //             login: null,
    //             senha: "123teste",
    //             nome: "teste"
    //         })

    //     // console.log(response.error)
    //     expect(response.statusCode).toEqual(400);
    //     expect(response.body).toHaveProperty("error");
        
    // })

    // it("ERROR senha session", async() => {

    //     const response = await request(app)
    //         .post("/session")
    //         .send({
    //             login: "adminix",
    //             senha: "123123",
    //             nome: "adminix"
    //         })

    //     // console.log(response.error)
    //     expect(response.statusCode).toEqual(401);
    //     expect(response.body.error).toEqual("Senha não confere");
        
    // })


    // it("ERROR usuario session", async() => {

    //     const response = await request(app)
    //         .post("/session")
    //         .send({
    //             login: null,
    //             senha: "123teste",
    //             nome: "teste"
    //         })

    //     // console.log(response.error)
    //     expect(response.statusCode).toEqual(401);
    //     expect(response.body.error).toEqual("Usuário não cadastrado");
        
    // })

        
    // it("post session", async() => {

    //     const response = await request(app)
    //         .post("/session")
    //         .send({
    //             login: "adminix",
    //             senha: "adminix",
    //             nome: "adminix"
    //         })

    //     expect(response.ok).toBeTruthy();
    //     expect(response.body).toHaveProperty("token");
        
    // })

    // it("get usuarios token valido", async() => {
    //     const user = await request(app)
    //         .post("/session")
    //         .send({
    //             login: "adminix",
    //             senha: "adminix",
    //             nome: "adminix"
    //         })
    //     // console.log(user)

    //     const response = await request(app)
    //         .get("/usuarios")
    //         .set("Authorization", `Bearer ${user.body.token}`)
        
    //     // console.log(response)
    //     expect(response.statusCode).toEqual(200);
        
    // })

    // it("ERROR get usuarios sem token", async() => {

    //     const response = await request(app)
    //         .get("/usuarios")
        
    //     // console.log(response)
    //     expect(response.statusCode).toEqual(401);
    //     expect(response.body.message).toEqual("Ocorreu um problema na autenticação");
        
    // })



    // it("ERROR get usuarios token invalido", async() => {

    //     const response = await request(app)
    //         .get("/usuarios")
    //         .set("Authorizations", "Bearer 123")
        
    //     // console.log(response)
    //     expect(response.statusCode).toEqual(401);
    //     expect(response.body.message).toEqual("Token inválido");
        
    // })
})
