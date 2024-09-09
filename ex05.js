// Criação do array de objetos alunos
const alunos = [
    { nome: "João", nota1: 8, nota2: 7 },
    { nome: "Maria", nota1: 9, nota2: 6 },
    { nome: "Pedro", nota1: 7, nota2: 8 },
    { nome: "Ana", nota1: 10, nota2: 9 }
  ];
  
  
  for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
  }
  