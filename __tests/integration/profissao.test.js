const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");

let token;

describe("Profissao", () => {

    beforeAll(async() => {
        await request(app)
          .post('/usuarios')
          .send({
            login: "renata100",
            senha: "afya1",
            nome: "renata"
        })
        
        });
    
      beforeEach( (done) => {
       request(app)
          .post('/session')
          .send({
            login: "renata100",
            senha: "afya1",
            nome: "renata"
        })
          .end((err, response) => {
            token = response.body.token; // save the token!
            done();
          });
      });

   

    it("post nova profissao", async() => {

        const response = await request(app)
            .post("/profissoes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:2,
                profissao: 'dentista'
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })

    it("ERROR post nova profissao", async() => {

        const response = await request(app)
            .post("/profissoes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:2,
                profissao: 'denti10'
            });

            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
        
    })


    it("get profissoes", async() => {

        const response = await request(app)
            .get("/profissoes")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        
    
    })


    it("get profissao pelo ID", async() => {

        const response = await request(app)
            .get("/profissoes/2")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('profissionais')
    })

    it(" ERROR get profissao pelo ID", async() => {

        const response = await request(app)
            .get("/profissoes/ok")
            .set("Authorization", `Bearer ${token}`)
               
            expect(response.statusCode).toEqual(400);
    
    })

    it(" ERROR get profissao pelo ID invalido", async() => {

        const response = await request(app)
            .get("/profissoes/-1")
            .set("Authorization", `Bearer ${token}`)
               
            expect(response.statusCode).toEqual(418);
            expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
    })



    it("update profissao", async() => {

        const response = await request(app)
            .put("/profissoes/2")
            .set("Authorization", `Bearer ${token}`)
            .send({
                profissao: "cardiologista"
            });
            
        console.log(response.body)
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    
    it("ERROR update profissao", async() => {

        const response = await request(app)
            .put("/profissoes/2")
            .set("Authorization", `Bearer ${token}`)
            .send({
                 profissao: null,
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
    })




    it("delete profissao", async() => {

        const response = await request(app)
            .del("/profissoes/2")
            .set("Authorization", `Bearer ${token}`)
               
            console.log(response.error)
            expect(response.statusCode).toEqual(200);
            // expect(response.ok).toBeTruthy();
            
    })
    
    it("ERROR delete profissao", async() => {

        const response = await request(app)
            .del("/profissoes/0")
            .set("Authorization", `Bearer ${token}`)
            
        
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");    
    })
        
})
