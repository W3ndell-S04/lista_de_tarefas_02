// Criação do objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    cor: "Preto"
  };
  
  
  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }
  