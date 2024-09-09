// Criação do array de objetos produtos
const produtos = [
    { nome: "Produto A", preco: 100, desconto: 0 },
    { nome: "Produto B", preco: 200, desconto: 0 },
    { nome: "Produto C", preco: 300, desconto: 0 },
    { nome: "Produto D", preco: 400, desconto: 0 }
  ];
  
  // Aplicar um desconto de 10% em todos os produtos e exibir o novo preço
  produtos.forEach(produto => {
    
    const precoComDesconto = produto.preco * 0.9;
    
    produto.preco = precoComDesconto;
    
    console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`);
  });
  