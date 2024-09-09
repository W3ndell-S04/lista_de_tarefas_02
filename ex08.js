// Criação do array de objetos filmes
const filmes = [
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Matrix", diretor: "Wachowskis", anoLancamento: 1999 },
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "Interstellar", diretor: "Christopher Nolan", anoLancamento: 2014 }
  ];
  
  const titulos = [];
  
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);
  