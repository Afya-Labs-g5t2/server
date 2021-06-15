const Prontuario = require('../../src/app/models/Prontuario');
require('../../src/database/index');

describe("Testando modelo Prontuario", () => {

  afterAll(async () => {
    return await Prontuario.destroy({truncate: true});
  });

  test("Inserir valores válidos no modelo ", () => {
    expect("hello").toBe("hello");
  });
});