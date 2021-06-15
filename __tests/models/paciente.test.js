const Paciente = require('../../src/app/models/Paciente');
require('../../src/database/index');

describe("Testando modelo ", () => {

  afterAll(async () => {
    return await Paciente.destroy({truncate: true});
  });

  test("Inserir valores válidos no modelo ", () => {
    expect("hello").toBe("hello");
  });
});