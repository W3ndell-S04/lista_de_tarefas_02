// Criação do array de objetos pedidos
const pedidos = [
    { cliente: "João", produto: "Produto A", quantidade: 3 },
    { cliente: "Maria", produto: "Produto B", quantidade: 5 },
    { cliente: "João", produto: "Produto C", quantidade: 2 },
    { cliente: "Pedro", produto: "Produto A", quantidade: 1 },
    { cliente: "Maria", produto: "Produto A", quantidade: 4 }
  ];
  
  
  const totalPorCliente = {};
  
  
  pedidos.forEach(pedido => {
    const { cliente, quantidade } = pedido;
  
   
    if (totalPorCliente[cliente]) {
      totalPorCliente[cliente] += quantidade;
    } else {
      
      totalPorCliente[cliente] = quantidade;
    }
  });
  

  console.log(totalPorCliente);
  