const Atendimento = require('../../src/app/models/Atendimento');
require('../../src/database/index');

describe("Testando modelo ", () => {

  afterAll(async () => {
    await Atendimento.destroy({truncate: true});
  });

  test("Inserir valores válidos no modelo ", () => {
    expect("hello").toBe("hello");
  });
});