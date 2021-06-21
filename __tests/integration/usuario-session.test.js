const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");



describe("Usuario", () => {
    
    it("post novo usuario", async() => {

        const response = await request(app)
            .post("/cadastrar")
            .send({
                id:1,
                login: "admin",
                senha: "admin100",
                nome: "admin"
            })
        
        // console.log(response.error)
        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo usuario", async() => {

        const response = await request(app)
            .post("/cadastrar")
            .send({
                login: null,
                senha: "123teste",
                nome: "teste"
            })

        // console.log(response.error)
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })

    it("ERROR senha session", async() => {

        const response = await request(app)
            .post("/session")
            .send({
                login: "admin",
                senha: "123123",
                nome: "admin"
            })

        // console.log(response.error)
        expect(response.statusCode).toEqual(401);
        expect(response.body.error).toEqual("Senha não confere");
        
    })


    it("ERROR usuario session", async() => {

        const response = await request(app)
            .post("/session")
            .send({
                login: null,
                senha: "123teste",
                nome: "teste"
            })

        // console.log(response.error)
        expect(response.statusCode).toEqual(401);
        expect(response.body.error).toEqual("Usuário não cadastrado");
        
    })

        
    it("post session", async() => {

        const response = await request(app)
            .post("/session")
            .send({
                login: "admin",
                senha: "admin100",
                nome: "admin"
            })

        expect(response.ok).toBeTruthy();
        expect(response.body).toHaveProperty("token");
        
    })

    it("get usuarios token valido", async() => {
        const user = await request(app)
            .post("/session")
            .send({
                login: "admin",
                senha: "admin100",
                nome: "admin"
            })

        const response = await request(app)
            .get("/usuarios")
            .set("Authorization", `Bearer ${user.body.token}`)
        
        // console.log(response)
        expect(response.statusCode).toEqual(200);
        
    })


    it("ERROR get usuarios token valido", async() => {
        const user = await request(app)
            .post("/session")
            .send({
                login: "admin",
                senha: "admin100",
                nome: "admin"
            })
        // console.log(user)

        const response = await request(app)
            .get("/usurarios")
            .set("Authorization", `Bearer ${user.body.token}`)
        
        console.log(response.body)
        expect(response.statusCode).toEqual(404);
        // expect(response.body.message).toEqual("Página não encontrada");
    })

    it("ERROR get usuarios sem token", async() => {

        const response = await request(app)
            .get("/usuarios")
        
        
        // console.log(response)
        expect(response.statusCode).toEqual(401);
        expect(response.body.message).toEqual("Ocorreu um problema na autenticação");
        
    })



    it("ERROR get usuarios token invalido", async() => {

        const response = await request(app)
            .get("/usuarios")
            .set("Authorization", "Bearer 123")
        
        // console.log(response)
        expect(response.statusCode).toEqual(401);
        expect(response.body.message).toEqual("Token inválido");
        
    })

    it("get paciente pelo ID", async() => {

        const user = await request(app)
        .post("/session")
        .send({
            login: "admin",
            senha: "admin100",
            nome: "admin"
        })

        const response = await request(app)
            .get("/usuarios/1")
            .set("Authorization", `Bearer ${user.body.token}`)
           
        expect(response.statusCode).toEqual(200);
      
    
    })

     it("ERROR get paciente pelo ID", async() => {

        const user = await request(app)
        .post("/session")
        .send({
            login: "admin",
            senha: "admin100",
            nome: "admin"
        })

            const response = await request(app)
                .get("/usuarios/ok")
                .set("Authorization", `Bearer ${user.body.token}`)
               
                expect(response.statusCode).toEqual(400);
                expect(response.body).toHaveProperty("error");
         })

    
         it("ERROR get usuario pelo ID invalido", async() => {

            const user = await request(app)
                .post("/session")
                .send({
                    login: "admin",
                    senha: "admin100",
                    nome: "admin"
                })

            const response = await request(app)
                .get("/usuarios/-1")
                .set("Authorization", `Bearer ${user.body.token}`)
               
                expect(response.statusCode).toEqual(418);
                expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
         })




    it("update usuario", async() => {

        const user = await request(app)
        .post("/session")
        .send({
            login: "admin",
            senha: "admin100",
            nome: "admin"
        })

        const response = await request(app)
            .put("/usuarios/1")
            .set("Authorization", `Bearer ${user.body.token}`)
            .send({
                login: "admin",
                senha: "admin100",
                nome: "gama"
            });
    
        // console.log(response.error)
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR update usuario", async() => {

        const user = await request(app)
        .post("/session")
        .send({
            login: "admin",
            senha: "admin100",
            nome: "admin"
        })


        const response = await request(app)
            .put("/usuarios/1")
            .set("Authorization", `Bearer ${user.body.token}`)
            .send({
                login: null,
                senha: "gama100",
                nome: "gama"
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })


    it("delete usuario", async() => {

        const user = await request(app)
        .post("/session")
        .send({
            login: "admin",
            senha: "admin100",
            nome: "admin"
        })

        const response = await request(app)
            .del("/usuarios/1")
            .set("Authorization", `Bearer ${user.body.token}`)
               
            expect(response.statusCode).toEqual(200);

            
    })

    it("ERROR delete usuario", async() => {

            const user = await request(app)
            .post("/session")
            .send({
                login: "admin",
                senha: "admin100",
                nome: "admin"
            })

            const response = await request(app)
            .del("/usuarios/0")
            .set("Authorization", `Bearer ${user.body.token}`)
               
            // console.log(response.error)
            expect(response.statusCode).toEqual(401);
            // expect(response.body).toHaveProperty("error");
            
    })

   
    it("render homepage", async() => {
        
        const response = await request(app)

        .get("/")

        // console.log(response.text)
        expect(response.statusCode).toEqual(200);
        
    })
})
