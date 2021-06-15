const request = require('supertest');
const app = require("../../src/app");
require("../../src/database");


describe("Especialista", () => {

    beforeAll(async() => {
       await request(app)
        .post("/profissoes")
        .send({
            profissao: 'clinico geral'
        });
      });

      
    afterAll(async() => {
        await request(app)
         .del("/profissoes/1")
    });
   

    it("post novo especialista", async() => {
       
        const response = await request(app)
        
            .post('/especialistas')
            .send({
                registro: '194527-SP',
                nome: 'Aarao Andrade Napoleao Lima',
                celular: '11922334458',
                telefone: '11922234567',
                email: 'araoo@example.com',
                id_profissao: 1
                
            });
        console.log(response.error)
        expect(response.ok).toBeTruthy();
        expect(response.id !== 0).toBe(true)  
    })

    it("ERROR post novo especialista", async() => {

        const response = await request(app)
            .post("/especialistas")
            .send({
                registro: null,
                nome: null,
                celular: '11922334459',
                telefone: '11922234567',
                email: 'araoo@example.com',
            });

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })


    it("get especialistas", async() => {

        const response = await request(app)
            .get("/especialistas")
           
        expect(response.statusCode).toEqual(200);
    
    })



    it("get especialista pelo ID", async() => {

        const response = await request(app)
            .get("/especialistas/1")
           
        expect(response.statusCode).toEqual(200);
        })


    // it(" ERROR get profissao pelo ID", async() => {

    //         const response = await request(app)
    //             .get("/profissoes/1")
               
    //             expect(response.statusCode).toEqual(400);
    //             expect(response.body).toHaveProperty("error");
    //     })




    it("update especialista", async() => {

            const response = await request(app)
                .put("/especialistas/1")
                .send({
                    registro: '194527-SP',
                    nome: 'Aarao Andrade Napoleao Lima',
                    celular: '11922335555',
                    telefone: '11922234567',
                    email: 'araoo@example.com',
                    id_profissao: 1
                });
    
            expect(response.ok).toBeTruthy();
            expect(response.statusCode).toEqual(200);
            
        })

    
        it("ERROR update especialista", async() => {

            const response = await request(app)
                .put("/especialistas/1")
                .send({
                    registro: null,
                    nome: null,
                    celular: '11922331111',
                    tel: '1192220000',
                    email: 'araoo@example.com',
                });
    
                expect(response.statusCode).toEqual(400);
                expect(response.body).toHaveProperty("error");
            
        })




        it("delete especialista", async() => {

            const response = await request(app)
                .del("/especialistas/1")
               
                expect(response.statusCode).toEqual(200);
                expect(response.ok).toBeTruthy();
            
        })
    
        it("ERROR delete especialista", async() => {

            const response = await request(app)
                .del("/especialistas/0")
               
                expect(response.statusCode).toEqual(400);
                expect(response.body).toHaveProperty("error");
            
            
        })
        
    

})
