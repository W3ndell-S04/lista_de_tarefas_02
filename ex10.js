// Criação do array de objetos vendas
const vendas = [
    { produto: "Produto A", quantidade: 10, valor: 50 },
    { produto: "Produto B", quantidade: 5, valor: 100 },
    { produto: "Produto C", quantidade: 7, valor: 30 },
    { produto: "Produto D", quantidade: 3, valor: 200 }
  ];
  
  
  let valorTotal = 0;
  
  
  vendas.forEach(venda => {
    
    valorTotal += venda.quantidade * venda.valor;
  });
  
  
  console.log(`Valor total das vendas: R$${valorTotal.toFixed(2)}`);
  