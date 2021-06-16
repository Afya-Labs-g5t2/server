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
        nome: "afya4"
    })
    
    });

  beforeEach( (done) => {
   request(app)
      .post('/session')
      .send({
        login: "Afya4",
        senha: "afyasenha4",
        nome: "afya4"
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
            id:2,
            cpf: '410.235.333-08',
            nome: 'Renan Azevedo Correia',
            data_nascimento: '1999-02-02',
            telefone: '(81) 3513-8008',
            celular: '(81) 3513-8008',
            email: 'RenanAzevedoCorreia@teleworm.us',
            tipo_sangue: 'O-',
        });
       });

       beforeAll(async() => {
        await request(app)
         .post("/profissoes")
         .set("Authorization", `Bearer ${token}`)
         .send({
             id: 3,
             profissao: 'dermatologista'
         });
       });

       beforeAll(async() => {
        await request(app)
         .post("/especialistas")
         .set("Authorization", `Bearer ${token}`)
         .send({
            id: 2,
            registro: '180968-SP',
            nome: 'Abigail Ballone',
            celular: '11911334456',
            telefone: '11532234567',
            email: 'abigail@example.com',
            id_profissao: 3,
         });
       });



       afterAll(async() => {
        await request(app)
         .del("/especialistas/3")
         .set("Authorization", `Bearer ${token}`)
    });
    
      
    afterAll(async() => {
        await request(app)
         .del("/profissoes/3")
         .set("Authorization", `Bearer ${token}`)
    });

    afterAll(async() => {
        await request(app)
         .del("/pacientes/2")
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
                status: "agendado",
                id_paciente: 2,
                id_especialista: 2
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

    // //  it("ERROR get atendimentos por", async() => {

    // //         const response = await request(app)
    // //             .get("/pacientes/id")
               
    // //             expect(response.statusCode).toEqual(400);
    // //             expect(response.body).toHaveProperty("error");
    // //      })



    it("alterar status atendimento", async() => {

        const response = await request(app)
            .patch("/atendimentos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                id:1,
                data_agendamento: "2021-06-01",
                data_atendimento: "2021-06-05",
                hora_atendimento: "09:00",
                valor: 20,
                status: "cancelado",
                id_paciente: 2,
                id_especialista: 2
            })

    
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR alterar status atendimento", async() => {

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
