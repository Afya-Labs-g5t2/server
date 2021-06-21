const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");

let token;

beforeAll(async() => {
    await request(app)
      .post('/usuarios')
      .send({
        login: "Afya5",
        senha: "afyasenha5",
        nome: "grupo"
    })
    
    });

  beforeEach( (done) => {
   request(app)
      .post('/session')
      .send({
        login: "Afya5",
        senha: "afyasenha5",
        nome: "grupo"
    })
      .end((err, response) => {
        token = response.body.token; // save the token!
        done();
      });
  });

  test("get prontuarios", async() => {

        const response = await request(app)
            .get("/prontuarios")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200); 
    })


describe("Atendimento", () => {

    beforeAll(async() => {
        await request(app)
        .post("/pacientes")
        .set("Authorization", `Bearer ${token}`)
        .send({
            id:7,
            cpf: '643.320.583-64',
            nome: 'Martim Correia Pinto',
            data_nascimento: '2001-02-02',
            telefone: '(61)8799-4421',
            celular: '(61)98799-4421',
            email: 'MartimCorreiaPinto@jourrapide.com',
            tipo_sangue: 'A-'
        });
       });

   
    afterAll(async() => {
        await request(app)
         .del("/pacientes/7")
         .set("Authorization", `Bearer ${token}`)
    });
    
    it("post novo prontuario", async() => {

        const response = await request(app)
            .post("/prontuarios")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:2,
                data_abertura: "2021-06-01",
                id_paciente: 7
            })

        console.log(response.body)
        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo atendimento", async() => {

        const response = await request(app)
            .post("/prontuarios")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id: null,
                data_abertura: null,
                id_paciente:null
              
            })

        // console.log(response.error)
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })



    it("get prontuarios por ID", async() => {

        const response = await request(app)
            .get("/prontuarios/2")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('paciente');

    
    })

    it("ERROR get prontuarios pelo ID", async() => {

        const response = await request(app)
            .get("/prontuarios/ok")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
     })


     it("ERROR get prontuario pelo ID invalido", async() => {

        const response = await request(app)
            .get("/prontuarios/-1")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(418);
            expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
     })


    it("update prontuario", async() => {

        const response = await request(app)
            .put("/prontuarios/2")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:2,
                data_abertura: "2021-06-10",
                id_paciente: 7
            })

        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR update atendimento", async() => {

        const response = await request(app)
            .put("/prontuarios/2")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id: null,
                data_abertura: null,
                id_paciente:null
            })

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
            
    })


    it("delete prontuario", async() => {

        const response = await request(app)
            .del("/prontuarios/2")
            .set("Authorization", `Bearer ${token}`)


        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR delete prontuario", async() => {

        const response = await request(app)
            .del("/prontuarios/0")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })
    
})
