describe("Listar Dispositivos", () => {
  let resposta;
  let dispositivos;

  const nomesEsperados = [
    "Google Pixel 6 Pro",
    "Apple iPhone 12 Mini, 256GB, Blue",
    "Apple iPhone 12 Pro Max",
    "Apple iPhone 11, 64GB",
    "Samsung Galaxy Z Fold2",
    "Apple AirPods",
    "Apple MacBook Pro 16",
    "Apple Watch Series 8",
    "Beats Studio3 Wireless",
    "Apple iPad Mini 5th Gen",
    "Apple iPad Mini 5th Gen",
    "Apple iPad Air",
    "Apple iPad Air",
  ];

  const obterPorId = (id) => dispositivos.find((item) => item.id === id);

  before(() => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects",
      failOnStatusCode: false,
    }).then((retorno) => {
      resposta = retorno;
      dispositivos = retorno.body;
    });
  });

  it("deve responder com status 200", () => {
    expect(resposta.status).to.equal(200);
  });

  it("deve retornar cabecalho content-type com json", () => {
    expect(resposta.headers["content-type"]).to.include("application/json");
  });

  it("deve retornar uma lista", () => {
    expect(dispositivos).to.be.an("array");
  });

  it("deve retornar 13 dispositivos", () => {
    expect(dispositivos).to.have.length(13);
  });

  it("deve garantir estrutura minima de todos os dispositivos", () => {
    dispositivos.forEach((item) => {
      expect(item).to.have.all.keys("id", "name", "data");
      expect(item.id).to.be.a("string").and.not.empty;
      expect(item.name).to.be.a("string").and.not.empty;
      expect(item.data === null || typeof item.data === "object").to.equal(true);
    });
  });

  it("deve retornar ids unicos", () => {
    const ids = dispositivos.map((item) => item.id);
    expect(new Set(ids).size).to.equal(dispositivos.length);
  });

  it("deve retornar ids sequenciais de 1 ate 13", () => {
    const ids = dispositivos.map((item) => item.id);
    const idsEsperados = Array.from({ length: 13 }, (_, index) =>
      String(index + 1),
    );
    expect(ids).to.deep.equal(idsEsperados);
  });

  it("deve retornar os nomes esperados na ordem correta", () => {
    const nomes = dispositivos.map((item) => item.name);
    expect(nomes).to.deep.equal(nomesEsperados);
  });

  it("deve validar o dispositivo id 1", () => {
    expect(obterPorId("1")).to.deep.equal({
      id: "1",
      name: "Google Pixel 6 Pro",
      data: {
        color: "Cloudy White",
        capacity: "128 GB",
      },
    });
  });

  it("deve validar que o dispositivo id 2 possui data nula", () => {
    expect(obterPorId("2")).to.deep.equal({
      id: "2",
      name: "Apple iPhone 12 Mini, 256GB, Blue",
      data: null,
    });
  });

  it("deve validar campos especiais do dispositivo id 3", () => {
    const dispositivo = obterPorId("3");
    expect(dispositivo.name).to.equal("Apple iPhone 12 Pro Max");
    expect(dispositivo.data.color).to.equal("Cloudy White");
    expect(dispositivo.data["capacity GB"]).to.equal(512);
    expect(dispositivo.data["capacity GB"]).to.be.a("number");
  });

  it("deve validar dados de preco e cor dos dispositivos 4 e 5", () => {
    const dispositivo4 = obterPorId("4");
    const dispositivo5 = obterPorId("5");

    expect(dispositivo4.data.price).to.equal(389.99);
    expect(dispositivo4.data.color).to.equal("Purple");
    expect(dispositivo4.data.price).to.be.a("number");

    expect(dispositivo5.data.price).to.equal(689.99);
    expect(dispositivo5.data.color).to.equal("Brown");
    expect(dispositivo5.data.price).to.be.a("number");
  });

  it("deve validar dados do dispositivo id 6", () => {
    const dispositivo = obterPorId("6");
    expect(dispositivo.name).to.equal("Apple AirPods");
    expect(dispositivo.data.generation).to.equal("3rd");
    expect(dispositivo.data.price).to.equal(120);
    expect(dispositivo.data.price).to.be.a("number");
  });

  it("deve validar campos com espacos do dispositivo id 7", () => {
    const dispositivo = obterPorId("7");
    expect(dispositivo.name).to.equal("Apple MacBook Pro 16");
    expect(dispositivo.data.year).to.equal(2019);
    expect(dispositivo.data.price).to.equal(1849.99);
    expect(dispositivo.data["CPU model"]).to.equal("Intel Core i9");
    expect(dispositivo.data["Hard disk size"]).to.equal("1 TB");
  });

  it("deve validar campos com letras maiusculas no dispositivo id 8", () => {
    const dispositivo = obterPorId("8");
    expect(dispositivo.name).to.equal("Apple Watch Series 8");
    expect(dispositivo.data["Strap Colour"]).to.equal("Elderberry");
    expect(dispositivo.data["Case Size"]).to.equal("41mm");
  });

  it("deve validar dados descritivos do dispositivo id 9", () => {
    const dispositivo = obterPorId("9");
    expect(dispositivo.name).to.equal("Beats Studio3 Wireless");
    expect(dispositivo.data.Color).to.equal("Red");
    expect(dispositivo.data.Description).to.equal(
      "High-performance wireless noise cancelling headphones",
    );
  });

  it("deve validar os dois iPads Mini com capacidades diferentes", () => {
    const ipadMini = dispositivos.filter(
      (item) => item.name === "Apple iPad Mini 5th Gen",
    );

    expect(ipadMini).to.have.length(2);
    expect(ipadMini[0].id).to.equal("10");
    expect(ipadMini[0].data.Capacity).to.equal("64 GB");
    expect(ipadMini[0].data["Screen size"]).to.equal(7.9);

    expect(ipadMini[1].id).to.equal("11");
    expect(ipadMini[1].data.Capacity).to.equal("254 GB");
    expect(ipadMini[1].data["Screen size"]).to.equal(7.9);
  });

  it("deve validar os dois iPads Air com preco em string", () => {
    const ipadAir = dispositivos.filter((item) => item.name === "Apple iPad Air");

    expect(ipadAir).to.have.length(2);

    expect(ipadAir[0].id).to.equal("12");
    expect(ipadAir[0].data.Generation).to.equal("4th");
    expect(ipadAir[0].data.Price).to.equal("419.99");
    expect(ipadAir[0].data.Capacity).to.equal("64 GB");
    expect(ipadAir[0].data.Price).to.be.a("string");

    expect(ipadAir[1].id).to.equal("13");
    expect(ipadAir[1].data.Generation).to.equal("4th");
    expect(ipadAir[1].data.Price).to.equal("519.99");
    expect(ipadAir[1].data.Capacity).to.equal("256 GB");
    expect(ipadAir[1].data.Price).to.be.a("string");
  });

  it("deve validar contagem de nomes repetidos esperados", () => {
    const contagem = dispositivos.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});

    expect(contagem["Apple iPad Mini 5th Gen"]).to.equal(2);
    expect(contagem["Apple iPad Air"]).to.equal(2);
    expect(contagem["Google Pixel 6 Pro"]).to.equal(1);
    expect(contagem["Apple AirPods"]).to.equal(1);
  });

  it("deve validar que existem exatamente 12 itens com data preenchida", () => {
    const comData = dispositivos.filter((item) => item.data !== null);
    expect(comData).to.have.length(12);
  });
});
