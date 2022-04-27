//função para o exercicio da atividade Sintaxe e Operadores

//função que recebe 2 numeros e executa alguns testes
function operator(number1, number2) {
  //compara os 2 dumeros recebidos na função e retorna se são iguais ou diferentes.
  const numberEqual = number1 === number2;
  let numberEqualString;
  console.log('numberEqual: ', numberEqual);
  numberEqual ? (numberEqualString = 'são') : (numberEqualString = 'não são');

  //soma os 2 numeros e diz que é maior que 10 e menor que 20
  const sum = number1 + number2;
  let sumString10;
  let sumString20;
  sum > 10 ? (sumString10 = 'maior') : (sumString10 = 'menor');
  sum < 20 ? (sumString20 = 'menor') : (sumString20 = 'maior');

  //retorna no console os resultados do teste
  console.log(`Os números ${number1} e ${number2} ${numberEqualString} iguais. 
Sua soma é ${sum}, que é ${sumString10} que 10 e ${sumString20} que 20".`);
}

//executa a função e envia 2 numeros
operator(4, 20);
operator(4, 10);
operator(4, 1);
operator(4, 4);
operator(8, 8);
