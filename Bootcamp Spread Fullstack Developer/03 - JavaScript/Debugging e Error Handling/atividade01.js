//objeto error
const meuError = new Error('erro de programação');
meuError.name = 'no Click Point operation';

meuError.name;

meuError.stack;

meuError;

throw meuError;

/* Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function myFunction(array, number) {
  try {
    if (!array && !number)
      throw new ReferenceError('Faltou algum parametro, tente novamente');

    if (typeof array !== 'object') throw new TypeError('Objeto não encontrato');

    if (typeof number !== 'number') throw new TypeError('Numero não Econtrado');

    if (number.lenght !== array)
      throw new RangeError('Parametros fora do tamanho especificado');

    return array;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Este é um Reference Error');
      console.log(error.message);
      throw error;
    } else if (error instanceof TypeError) {
      console.log('Este é um Reference Error');
      console.log(error.message);
      console.log(error.stack);
      throw error;
    } else if (error instanceof RangeError) {
      console.log('Este é um Reference Error');
      console.log(error.message);
      throw error;
    } else {
      console.log('Erro inexperado', error);
    }
  }
}

const array = { num: 1, num: 2 };
const number = 12;

myFunction(array, number);

try {
} catch (error) {}
