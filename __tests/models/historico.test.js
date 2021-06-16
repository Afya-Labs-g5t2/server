const Historico = require('../../src/app/models/Historico');
require('../../src/database/index');

describe("Testando modelo ", () => {

  afterAll(async () => {
    await Historico.destroy({truncate: true});
  });

  test("Inserir valores válidos no modelo ", () => {
    expect("hello").toBe("hello");
  });
});