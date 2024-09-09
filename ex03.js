// Criação do objeto produto
const produto = {
    nome: "Smartphone",
    preco: 1200,
    estoque: 30,
    peso: 0.5,
    desconto: 50,
    altura: 15
  };
  

  function filtrarPropriedades(produto, valorEspecifico) {
    const novoObjeto = {};
  
    for (let propriedade in produto) {
      
      if (typeof produto[propriedade] === 'number' && produto[propriedade] > valorEspecifico) {
        novoObjeto[propriedade] = produto[propriedade];
      }
    }
  
    return novoObjeto;
  }
  

  const valorEspecifico = 10;
  const resultado = filtrarPropriedades(produto, valorEspecifico);
  
  console.log(resultado);
  