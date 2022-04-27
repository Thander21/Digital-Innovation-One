/*
Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

function listAlunos(alunos, media) {
  const alunosAprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    const { nota, nome } = alunos[i];

    if (nota >= media) {
      alunosAprovados.push(nome);
    }
  }

  return alunosAprovados;
}

const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B',
  },
  {
    nome: 'gustavo',
    nota: 7,
    turma: '1A',
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B',
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C',
  },
  {
    nome: 'rahman',
    nota: 10,
    turma: '3C',
  },
];

const aprovados = listAlunos(alunos, 7);

console.log('aprovados: ', aprovados);
