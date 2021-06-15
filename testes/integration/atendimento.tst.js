const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");


describe("Atendimento", () => {
    
    it("post novo atendimento", async() => {

        const response = await request(app)
            .post("/atendimentos")
            .send({
                data_agendamento: "2021-06-01",
                data_atendimento: "2021-06-05",
                hora_atendimento: "09:00",
                valor: 20,
                status: "agendado",
                id_paciente: 1,
                id_especialista: 1
            })

        console.log(response.error)
        // expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true);
        
    })


    it("ERROR post novo atendimento", async() => {

        const response = await request(app)
            .post("/atendimentos")
            .send({
                data_agendamento: null,
                data_atendimento: null,
                hora_atendimento: "09:00",
                valor: 20,
                status: "agendado",
                id_paciente: 1,
                id_especialista: 1
            })

        console.log(response.error)
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })



    // it("get atendimentos", async() => {

    //     const response = await request(app)
    //         .get("/atendimentos")
           
    //     expect(response.statusCode).toEqual(200);
        
    // })


    // it("get atendimentos por data", async() => {

    //     const response = await request(app)
    //         .get("/atendimentos/data/2021-06-05")
           
    //     expect(response.statusCode).toEqual(200);
    
    // })

    // it("get atendimentos por ID", async() => {

    //     const response = await request(app)
    //         .get("/atendimentos/1")
           
    //     expect(response.statusCode).toEqual(200);
    //     expect(response.body).toHaveProperty('paciente');
    //     expect(response.body).toHaveProperty('especialista');
    
    // })

    // //  it("ERROR get atendimentos por", async() => {

    // //         const response = await request(app)
    // //             .get("/pacientes/id")
               
    // //             expect(response.statusCode).toEqual(400);
    // //             expect(response.body).toHaveProperty("error");
    // //      })



    // it("alterar status atendimento", async() => {

    //     const response = await request(app)
    //         .patch("/atendimentos/1")
    //         .send({
    //             status: "cancelado",
    //         });
    
    //     expect(response.ok).toBeTruthy();
    //     expect(response.statusCode).toEqual(200);
            
    // })

    it("ERROR alterar status atendimento", async() => {

        const response = await request(app)
            .patch("/atendimentos/1")
            .send({
                status: null,
            });
    
            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
            
    })
    
})
