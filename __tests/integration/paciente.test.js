const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");

let token;

describe("Paciente", () => {

    beforeAll(async() => {
        await request(app)
          .post('/usuarios')
          .send({
            login: "Afya1",
            senha: "afyasenha1",
            nome: "maria"
        })
        
        });
    
      beforeEach( (done) => {
       request(app)
          .post('/session')
          .send({
            login: "Afya1",
            senha: "afyasenha1",
            nome: "maria"
        })
          .end((err, response) => {
            token = response.body.token; // save the token!
            done();
          });
      });

    
    it("post novo paciente", async() => {

        const response = await request(app)
            .post("/pacientes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:2,
                cpf: '101.111.111-12',
                nome: 'Roberto da Silva',
                data_nascimento: '1999-02-02',
                telefone: '(11)1811-1111',
                celular: '(11)91191-1011',
                email: 'robertosilva@email.com',
                tipo_sangue: 'O+', 
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo paciente", async() => {

        const response = await request(app)
            .post("/pacientes")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cpf: null,
                nome: null,
                data_nasc: '1999-02-02',
                tel: '(11)10811-1111',
                celular: '(11)91191-1011',
                email: 'robertossilva@email.com',
                tipo_sangue: 'O+',
            });

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })


    it("get paciente", async() => {

        const response = await request(app)
            .get("/pacientes")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        
    })

    it("get paciente paginas", async() => {

        const response = await request(app)
            .get("/pacientes?page=1")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        
    })


    it("ERRO get paciente paginas", async() => {

        const response = await request(app)
            .get("/pacientes?page=page")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(400);
        
    })


    it("get paciente pelo ID", async() => {

        const response = await request(app)
            .get("/pacientes/2")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('endereco');
        expect(response.body).toHaveProperty('prontuario');
        expect(response.body).toHaveProperty('consultas');
    
    })

     it("ERROR get paciente pelo ID", async() => {

            const response = await request(app)
                .get("/pacientes/ok")
                .set("Authorization", `Bearer ${token}`)
               
                expect(response.statusCode).toEqual(400);
                expect(response.body).toHaveProperty("error");
         })

    
         it("ERROR get paciente pelo ID invalido", async() => {

            const response = await request(app)
                .get("/pacientes/-1")
                .set("Authorization", `Bearer ${token}`)
               
                expect(response.statusCode).toEqual(418);
                expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
         })



    it("update paciente", async() => {

        const response = await request(app)
            .put("/pacientes/2")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cpf: '101.111.111-12',
                nome: 'Roberto da Silva',
                data_nascimento: '1999-02-02',
                telefone: '(11)1081-2222',
                celular: '(11)91191-2221',
                email: 'robertosantossilva@email.com',
                tipo_sangue: 'O+',
            });
    
        console.log(response.error)
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR update paciente", async() => {

        const response = await request(app)
            .put("/pacientes/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cpf: null,
                nome: null,
                data_nasc: '1999-02-02',
                tel: '(11)10811-2222',
                celular: '(11)91191-222',
                email: 'robertosantossilva@email.com',
                tipo_sangue: 'O+',
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })


    it("delete paciente", async() => {

        const response = await request(app)
            .del("/pacientes/2")
            .set("Authorization", `Bearer ${token}`)
               
            expect(response.statusCode).toEqual(200);

            
    })

    it("ERROR delete paciente", async() => {

        const response = await request(app)
            .del("/pacientes/0")
            .set("Authorization", `Bearer ${token}`)
               
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })
    
})
