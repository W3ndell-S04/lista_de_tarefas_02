// Criação do array de objetos pessoas
const pessoas = [
    { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bruno", idade: 32, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 28, cidade: "Belo Horizonte" },
    { nome: "Daniel", idade: 22, cidade: "Curitiba" }
  ];
  
  for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  