/*
Map, Filter e Reduce
Este repositório contém a atividade prática do Curso "Map, Filter e Reduce", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.
*/

/*
Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

const maca = {
  value: 5,
};

const laranja = {
  value: 10,
};

const numbers = [1, 2];

//com this e usando fuanção normal com argumento
function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

//sem this usando arrow function com argumento
function mapSemThis(arr, thisArg) {
  return arr.map(item => item * thisArg.value);
}

//sem this usando arrow function sem argumento
function mapSemArg(arr) {
  return arr.map(item => item * 25);
}

//com this e usando fuanção normal com argumento
console.log('Quando this é maçã', mapComThis(numbers, maca));
console.log('Quando this é laranja', mapComThis(numbers, laranja));

//sem this usando arrow function com argumento
console.log('Sem this, maçã', mapSemThis(numbers, maca));
console.log('Sem this, laranja', mapSemThis(numbers, laranja));

//sem this usando arrow function sem argumento
console.log('Sem Argumento', mapSemArg(numbers));

/*
Filter
Filtre e retorne todos os números pares de um array.
*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenFilter(arr) {
  return arr.filter(item => item % 2 === 0);
}

console.log(evenFilter(numbers2));
/*
Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

//some os numeros
const numbers3 = [2, 4, 8, 16, 32, 64, 128];

function sumNumbers(arr) {
  return arr.reduce((sum, current) => sum + current);
}

console.log(sumNumbers(numbers3));
