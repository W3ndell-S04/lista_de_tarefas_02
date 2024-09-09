// Criação do array de objetos estoque
const estoque = [
    { produto: "Produto A", quantidade: 5, minimo: 10 },
    { produto: "Produto B", quantidade: 15, minimo: 12 },
    { produto: "Produto C", quantidade: 8, minimo: 20 },
    { produto: "Produto D", quantidade: 25, minimo: 25 }
  ];
  
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      
      item.quantidade *= 2;
    }
  });
  
  
  console.log(estoque);
  