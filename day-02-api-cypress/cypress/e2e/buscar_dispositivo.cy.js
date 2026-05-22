describe("Buscar Dispositivo", () => {
  it("Buscar dispositivo existente", () => {
    // promisse
    cy.request({
      method: "GET",
      url: 'https://api.restful-api.dev/objects/1'
    }).then((retorno) => {
      // validar minha resposta
      expect(retorno.status).to.be.equal(200);
      expect(retorno.body.id).to.be.equal("1");
      expect(retorno.body.name).to.be.equal("Google Pixel 6 Pro");
    });
  });

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: 'https://api.restful-api.dev/objects/xpto',
      failOnStatusCode: false
    }).then((retorno) => {
      // validar minha resposta
      expect(retorno.status).to.be.equal(404);
      expect(retorno.body.error).to.be.equal("Object with id=xpto was not found.");
    });
  });
});
