const request = require('supertest');
const app = require("../../src/app");
const Paciente = require('../../src/app/models/Paciente');
const Especialista = require('../../src/app/models/Especialista');
require('../../src/database/index');

let token;

describe("Endereco", () => {

    beforeAll(async() => {
        await request(app)
          .post('/usuarios')
          .send({
            login: "testesAfya",
            senha: "123testes",
            nome: "testes"
        })
        
        });
    
      beforeAll( (done) => {
       request(app)
          .post('/session')
          .send({
            login: "testesAfya",
            senha: "123testes",
            nome: "testes"
        })
          .end((err, response) => {
            token = response.body.token; 
            done();
          });
      });


      beforeAll(async() => {
        await request(app)
         .post("/profissoes")
         .set("Authorization", `Bearer ${token}`)
         .send({
             id: 1,
             profissao: 'clinico geral'
         });
       });
    
      
    afterAll(async() => {
        await request(app)
         .del("/profissoes/1")
         .set("Authorization", `Bearer ${token}`)
    });


    const formPacRes = {
        id: 1,
        cpf: '898.027.095-06',
        nome: 'Vinicius Pereira Ribeiro',
        data_nascimento: '1999-02-02',
        telefone: '(19)4496-8907',
        celular: '(19)94496-8907',
        email: 'ViniciusPereiraRibeiro@armyspy.com',
        tipo_sangue: 'A+',
        cep: '58076-140',
        logradouro: 'Vila Nossa Senhora das Neves',
        numero: 158,
        bairro: 'Bairro Estrela',
        cidade: 'João Pessoa',
        uf: 'PB'
  }


  const formEspRes = {
    id:1,
    registro: '39558-MG',
    nome: 'Abdalla Campos Felicio',
    celular: '11922334458',
    telefone: '1122234567',
    email: 'bdalla@example.com',
    id_profissao: 1,
    cep: '58076-140',
    logradouro: 'Vila Nossa Senhora das Neves',
    numero: 158,
    bairro: 'Bairro Estrela',
    cidade: 'João Pessoa',
    uf: 'PB'
}

    it("post novo endereco com paciente", async() => {

        const response = await request(app)
            .post("/enderecos")
            .set("Authorization", `Bearer ${token}`)
            .send(
             formPacRes
            );

            // console.log(response)
            expect(response.statusCode).toEqual(200);
           
        
    })

    it("post novo endereco com especialista", async() => {

        const response = await request(app)
            .post("/enderecos")
            .set("Authorization", `Bearer ${token}`)
            .send(
             formEspRes
            );

            // console.log(response)
            expect(response.statusCode).toEqual(200);
          
        
    })
            
    
    it("ERROR post novo endereco", async() => {

        const response = await request(app)
            .post("/enderecos")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cep: null,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: null,
                bairro: "Bairro Estrela",
                cidade: "João Pessoa",
                uf: null
            });

            expect(response.statusCode).toEqual(400);
            expect(response.body).toHaveProperty("error");
        
    })

    it("get endereco", async() => {

        const response = await request(app)
            .get("/enderecos")
            .set("Authorization", `Bearer ${token}`)
           
        expect(response.statusCode).toEqual(200);
        
        
    })

     it("ERROR get endereco", async() => {

        const response = await request(app)
            .get("/enderecoss")
            
        
        console.log(response.error)
        expect(response.statusCode).toEqual(401);
        
    })
    

    it("get endereco pelo ID com associacoes", async() => {

        const response = await request(app)
            .get("/enderecos/1")
            .set("Authorization", `Bearer ${token}`)
        
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('moradores');
        expect(response.body).toHaveProperty('doutores');
        
    })

    it("ERROR get endereco sem ID", async() => {

        const response = await request(app)
            .get("/enderecos/ok")
            .set("Authorization", `Bearer ${token}`)
        
        expect(response.statusCode).toEqual(404);
        expect(response.body.error).toEqual("Não existe nenhum Endereço com esse id");
    })
    
    it("ERROR get endereco pelo ID negativo", async() => {

        const response = await request(app)
            .get("/enderecos/-1")
            .set("Authorization", `Bearer ${token}`)
        
        expect(response.statusCode).toEqual(418);
        expect(response.body.error).toEqual("São aceitos somente valores de Id maiores do que zero" );
    })
    

    it("update endereco", async() => {

        const response = await request(app)
            .put("/enderecos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cep: '06757-125',
                logradouro: 'Avenida Goiás',
                numero: 1148,
                bairro: 'Bairro Terra',
                cidade: 'Itabuna',
                uf: 'BA',
            });
        
        console.log(response.error)
        expect(response.statusCode).toEqual(200);
        expect(response.ok).toBeTruthy();
        
    })


    it("ERROR update endereco", async() => {

        const response = await request(app)
            .put("/enderecos/1")
            .set("Authorization", `Bearer ${token}`)
            .send({
                cep: 544,
                logradouro: "Vila Nossa Senhora das Neves",
                numero: 1584,
                bairro: "Bairro Estrela",
                cidade: "Sao Paulo",
                uf: null
            });
        
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })


    it("delete endereco", async() => {

        const response = await request(app)
            .del("/enderecos/1")
            .set("Authorization", `Bearer ${token}`)
           
            expect(response.statusCode).toEqual(200);
            expect(response.ok).toBeTruthy();
    })



      it("ERROR delete endereco", async() => {

        const response = await request(app)
            .del("/enderecos/0")
            .set("Authorization", `Bearer ${token}`)
        
       
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error");
        
    })

})
