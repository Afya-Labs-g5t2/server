const Usuario = require('../../src/app/models/Usuario');
require('../../src/database/index');

describe("Testando modelo Usuario", () => {

  test("Inserir valores válidos no modelo Usuario", async () => {
    let novoUsuario = await Usuario.create({
      login: "exemplo",
      nome: "Fulano de Tal",
      senha: "12345"
    });
    expect(novoUsuario.id).not.toBe(undefined);
    expect(novoUsuario.login).toBe("exemplo");
    expect(novoUsuario.nome).toBe("Fulano de Tal");
    expect(novoUsuario.senha).toBe("12345");
    expect(novoUsuario.senha_hash).not.toBe(undefined);
    expect(novoUsuario.createdAt).not.toBe(undefined);
    expect(novoUsuario.updatedAt).not.toBe(undefined);
  });

  test("Valor da senha é equivalente ao hash", async () => {
    let usuario = await Usuario.findOne({ where: { login: "exemplo" }});
    let resultado = await usuario.checkPassword("12345");
    expect(resultado).toBe(true);
  });

  test("Inserir tipo de dado inválido no campo login do modelo Usuario", async () => {
    let novoUsuario = await Usuario.create({
      login: 10,
      nome: "Fulana de Tal",
      senha: "12345"
    }).catch((err) => {
      return err.message;
    });
    expect(novoUsuario).toBe("Validation error: Validation is on login failed");
  });

  test("Inserir tipo de dado inválido no campo nome do modelo Usuario", async () => {
    let novoUsuario = await Usuario.create({
      login: "exemplo2",
      nome: 321,
      senha: "12345"
    }).catch((err) => {
      return err.message;
    });
    expect(novoUsuario).toBe("Validation error: Validation is on nome failed");
  });

  test("Inserir valor excessivo no campo login do modelo Usuario", async () => {
    let novoUsuario = await Usuario.create({
      login: "abcdefghijklmnopqrstuvwxyz",
      nome: "Ciclano de Qual",
      senha: "12345"
    }).catch((err) => {
      return err.message;
    });
    expect(novoUsuario).toBe("Validation error: Validation is on login failed");
  });

  test("Inserir valor excessivo no campo nome do modelo Usuario", async () => {
    let novoUsuario = await Usuario.create({
      login: "abcdefghijklmnop",
      nome: "Teresa Cristina Maria Josefa Gaspar Baltasar Melchior Januária Rosalía Lúcia Francisca de Assis Isabel Francisca de Pádua Donata Bonosa Andréia de Avelino Rita Liutgarda Gertrude Venância Tadea Spiridione Roca Matilde de Bourbon-Duas Sicílias",
      senha: "12345"
    }).catch((err) => {
      return err.message;
    });
    expect(novoUsuario).toBe("Validation error: Validation is on nome failed");
  });
});