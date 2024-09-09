// Criação do objeto empresa
const empresa = {
    departamentos: [
      {
        nome: "Recursos Humanos",
        funcionarios: [
          { nome: "Ana", cargo: "Gerente de RH" },
          { nome: "Carlos", cargo: "Assistente de RH" }
        ]
      },
      {
        nome: "Desenvolvimento",
        funcionarios: [
          { nome: "Pedro", cargo: "Desenvolvedor Frontend" },
          { nome: "Mariana", cargo: "Desenvolvedora Backend" }
        ]
      },
      {
        nome: "Marketing",
        funcionarios: [
          { nome: "Fernanda", cargo: "Analista de Marketing" },
          { nome: "Lucas", cargo: "Coordenador de Marketing" }
        ]
      }
    ]
  };
  
  for (let i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
    console.log(`Departamento: ${departamento.nome}`);
  
    for (let funcionario of departamento.funcionarios) {
      console.log(`  Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
  }
  