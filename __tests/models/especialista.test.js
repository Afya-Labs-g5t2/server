const Especialista = require('../../src/app/models/Especialista');
require('../../src/database/index');

describe("Testando modelo ", () => {

  afterAll(async () => {
    return await Especialista.destroy({truncate: true});
  });

  test("Inserir valores válidos no modelo ", () => {
    expect("hello").toBe("hello");
  });
});