// Criação do array de objetos funcionarios
const funcionarios = [
    { nome: "Carlos", cargo: "Gerente", salario: 7500 },
    { nome: "Ana", cargo: "Analista", salario: 4800 },
    { nome: "Paulo", cargo: "Desenvolvedor", salario: 5500 },
    { nome: "Mariana", cargo: "Designer", salario: 4200 },
    { nome: "Fernanda", cargo: "Marketing", salario: 3600 }
  ];
  
  // Valor específico para o filtro
  const salarioMinimo = 5000;
  
  for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
  }
  