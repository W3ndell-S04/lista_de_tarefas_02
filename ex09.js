// Criação do array de objetos clientes
const clientes = [
    { nome: "João", idade: 28, cidade: "São Paulo" },
    { nome: "Maria", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 45, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 22, cidade: "Curitiba" },
    { nome: "Fernanda", idade: 31, cidade: "Recife" }
  ];
  
  
  let contagemAcimaDe30 = 0;
  
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contagemAcimaDe30++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contagemAcimaDe30}`);
  