describe("Cadastrar Dispositivo", () => {
  it("Cadastrar dispositivo com sucesso", () => {
    // promisse
    cy.request({
      method: "POST",
      url: 'https://api.restful-api.dev/objects',
      body: {
        name: "Celular QAzando",
        data: {
          year: 2026,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      }
    }).then((retorno) => {
      // validar minha resposta
      expect(retorno.status).to.equal(200);
      expect(retorno.body.id).not.to.empty;
      expect(retorno.body.name).to.equal("Celular QAzando");
      expect(retorno.body.data.year).to.equal(2026);
      expect(retorno.body.data.price).to.equal(1849.99);
      expect(retorno.body.data["CPU model"]).to.equal("Intel Core i9");
      expect(retorno.body.data["Hard disk size"]).to.equal("1 TB");
      expect(retorno.body.createdAt).to.be.greaterThan(0);
    });
  });
});
