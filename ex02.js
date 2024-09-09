// Criação do objeto livro
const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
  };
  
  let propriedadeExiste = false;
  
  for (let propriedade in livro) {
    if (propriedade === "editora") {
      propriedadeExiste = true;
      break;
    }
  }
  
  if (!propriedadeExiste) {
    livro.editora = "Editora fictícia";
  }
  
  console.log(livro);
  