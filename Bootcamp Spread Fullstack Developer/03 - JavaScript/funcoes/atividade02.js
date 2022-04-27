/*
Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const aluno = {
  nome: 'rahman',
  idade: 44,
};

//const minhaIdadeFutura = calculaIdade.apply(aluno, [20]);
const minhaIdadeFutura = calculaIdade.call(aluno, 20);
console.log('minhaIdadeFutura: ', minhaIdadeFutura);
