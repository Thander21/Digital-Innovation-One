//Troque todos os elementos pares e diferentes de zero de um array pelo número 0.
//Se o array for vazio, retorne -1.

let array = [1, 3, 9, 54, 77, 65, 908, 4, 6, 594, 773, 80, 33, 23, 90];

if (!array.length) {
  array = -1;
}
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0 && array[index] !== 0) {
    array[index] = 0;
  }
}

console.log(array);
