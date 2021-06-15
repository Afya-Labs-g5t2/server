const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");

let token;

describe("Profissao", () => {

    beforeAll(async() => {
        await request(app)
          .post('/usuarios')
          .send({
            login: "Afya2",
            senha: "afyasenha2",
            nome: "afya2"
        })
        
        });
    
      beforeEach( (done) => {
       request(app)
          .post('/session')
          .send({
            login: "Afya2",
            senha: "afyasenha2",
            nome: "afya2"
        })
          .end((err, response) => {
            token = response.body.token; // save the token!
            done();
          });
      });

   

    it("post nova profissao", async() => {

        const response = await request(app)
            .post("/profissoes")
            .set("Authorizations", `Bearer ${token}`)
            .send({
                profissao: 'dentista'
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })

    it("ERROR post nova profissao", async() => {

        const response = await request(app)
            .post("/profissoes")
            .set("Authorizations", `Bearer ${token}`)
            .send({
                profissao: null
            });

            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
        
    })


    it("get profissoes", async() => {

        const response = await request(app)
            .get("/profissoes")
            .set("Authorizations", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        // expect(response.body[0].profissao).toEqual('dentista');
    
    })


    it("get profissao pelo ID", async() => {

        const response = await request(app)
            .get("/profissoes/1")
            .set("Authorizations", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('profissionais')
    })

    // it(" ERROR get profissao pelo ID", async() => {

    //     const response = await request(app)
    //         .get("/profissoes/1")
               
    //         expect(response.statusCode).toEqual(400);
    //         expect(response.body).toHaveProperty("error");
    // })


    it("update profissao", async() => {

        const response = await request(app)
            .put("/profissoes/1")
            .set("Authorizations", `Bearer ${token}`)
            .send({
                profissao: "cardiologista"
            });
            
        console.log(response.body)
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    
    it("ERROR update profissao", async() => {

        const response = await request(app)
            .put("/profissoes/1")
            .set("Authorizations", `Bearer ${token}`)
            .send({
                 profissao: null,
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
    })




    it("delete profissao", async() => {

        const response = await request(app)
            .del("/profissoes/1")
            .set("Authorizations", `Bearer ${token}`)
               
            console.log(response.error)
            expect(response.statusCode).toEqual(200);
            // expect(response.ok).toBeTruthy();
            
    })
    
    it("ERROR delete profissao", async() => {

        const response = await request(app)
            .del("/profissoes/0")
            .set("Authorizations", `Bearer ${token}`)
            
        
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");    
    })
        
})
