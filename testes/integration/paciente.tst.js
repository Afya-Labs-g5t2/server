const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");


describe("Paciente", () => {
    
    it("post novo paciente", async() => {

        const response = await request(app)
            .post("/pacientes")
            .send({
                cpf: '101.111.111-12',
                nome: 'Roberto da Silva',
                data_nascimento: '1999-02-02',
                telefone: '(11)10811-1111',
                celular: '(11)91191-1011',
                email: 'robertossilva@email.com',
                tipo_sangue: 'O+', 
            });

        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo paciente", async() => {

        const response = await request(app)
            .post("/pacientes")
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
           
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].nome).not.toBe(undefined);
        
    })


    it("get paciente pelo ID", async() => {

        const response = await request(app)
            .get("/pacientes/1")
           
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('endereco');
    
    })

    // //  it("ERROR get paciente pelo ID", async() => {

    // //         const response = await request(app)
    // //             .get("/pacientes/id")
               
    // //             expect(response.statusCode).toEqual(400);
    // //             expect(response.body).toHaveProperty("error");
    // //      })



    it("update paciente", async() => {

        const response = await request(app)
            .put("/pacientes/1")
            .send({
                cpf: '101.111.111-12',
                nome: 'Roberto da Silva',
                data_nasc: '1999-02-02',
                tel: '(11)10811-2222',
                celular: '(11)91191-222',
                email: 'robertosantossilva@email.com',
                tipo_sangue: 'O+',
            });
    
        expect(response.ok).toBeTruthy();
        expect(response.statusCode).toEqual(200);
            
    })

    it("ERROR update paciente", async() => {

        const response = await request(app)
            .put("/pacientes/1")
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
            .del("/pacientes/1")
               
            expect(response.statusCode).toEqual(200);
            expect(response.ok).toBeTruthy();
            
    })

    it("ERROR delete paciente", async() => {

        const response = await request(app)
            .del("/pacientes/0")
               
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })
    
})
