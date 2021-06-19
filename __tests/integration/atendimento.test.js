const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");

let token;

beforeAll(async() => {
    await request(app)
      .post('/usuarios')
      .send({
        login: "Afya4",
        senha: "afyasenha4",
        nome: "renatamie"
    })
    
    });

  beforeEach( (done) => {
   request(app)
      .post('/session')
      .send({
        login: "Afya4",
        senha: "afyasenha4",
        nome: "renatamie"
    })
      .end((err, response) => {
        token = response.body.token; // save the token!
        done();
      });
  });

  test("get atendimentos", async() => {

        const response = await request(app)
            .get("/atendimentos")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200); 
    })


describe("Atendimento", () => {

    beforeAll(async() => {
        await request(app)
        .post("/pacientes")
        .set("Authorization", `Bearer ${token}`)
        .send({
            id:3,
            cpf: '410.235.333-08',
            nome: 'Renan Azevedo Correia',
            data_nascimento: '1999-02-02',
            telefone: '(81)3513-8008',
            celular: '(81)93513-8008',
            email: 'RenanAzevedoCorreia@teleworm.us',
            tipo_sangue: 'O-',
        });
       });

       beforeAll(async() => {
        await request(app)
         .post("/profissoes")
         .set("Authorization", `Bearer ${token}`)
         .send({
             id: 4,
             profissao: 'dermatologista'
         });
       });

       beforeAll(async() => {
        await request(app)
         .post("/especialistas")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id: 3,
            registro: '180968-SP',
            nome: 'Abigail Ballone',
            celular: '11911334456',
            telefone: '1132234567',
            email: 'abigail@example.com',
            id_profissao: 4,
         });
       });



       afterAll(async() => {
        await request(app)
         .del("/especialistas/3")
         .set("Authorization", `Bearer ${token}`)
    });
    
      
    afterAll(async() => {
        await request(app)
         .del("/profissoes/4")
         .set("Authorization", `Bearer ${token}`)
    });

    afterAll(async() => {
        await request(app)
         .del("/pacientes/3")
         .set("Authorization", `Bearer ${token}`)
    });
    
    it("post novo atendimento", async() => {

        const response = await request(app)
            .post("/atendimentos")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:1,
                data_agendamento: "2021-06-01",
                data_atendimento: "2021-06-05",
                hora_atendimento: "09:00",
                valor: 20,
                status: "AGENDADO",
                id_paciente: 3,
                id_especialista: 3
            })

        console.log(response.body)
        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo atendimento", async() => {

        const response = await request(app)
            .post("/atendimentos")
            .set("Authorization", `Bearer ${token}`)
            .send({
                data_agendamento: null,
                data_atendimento: null,
                hora_atendimento: "09:00",
                valor: 20,
                status: "agendado",
                id_paciente: 1,
                id_especialista: 1
            })

        // console.log(response.error)
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })



    it("get atendimentos por data", async() => {

        const response = await request(app)
            .get("/atendimentos/data/2021-06-05")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
    
    })


    it("get atendimentos por ID", async() => {

        const response = await request(app)
            .get("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('paciente');
        expect(response.body).toHaveProperty('especialista');
    
    })

    it("ERROR get paciente pelo ID", async() => {

        const response = await request(app)
            .get("/atendimentos/ok")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
     })


     it("ERROR get paciente pelo ID invalido", async() => {

        const response = await request(app)
            .get("/atendimentos/-1")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(418);
            expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
     })


    it("update atendimento", async() => {

        const response = await request(app)
            .put("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:1,
                data_agendamento: "2021-06-02",
                data_atendimento: "2021-06-10",
                hora_atendimento: "15:00",
                valor: 200,
                status: "AGENDADO",
                id_paciente: 3,
                id_especialista: 3
            })

        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR update atendimento", async() => {

        const response = await request(app)
            .put("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:null,
                data_agendamento: null,
                data_atendimento: null,
                hora_atendimento: null,
                valor: 200,
                status: null,
                id_paciente: 3,
                id_especialista: 3
            })

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
            
    })


    it("alterar/patch  status atendimento", async() => {

        const response = await request(app)
            .patch("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
             status: "CANCELADO"
            })

        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR alterar/patch status atendimento", async() => {

        const response = await request(app)
            .patch("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                status: null,
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })
    
})
