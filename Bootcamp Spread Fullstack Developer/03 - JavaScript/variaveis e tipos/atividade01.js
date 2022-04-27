//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

//versão 1 automatica

function testPalindrmo(phrase) {
  const invertPrase = phrase.split('').reverse().join('');
  console.log(invertPrase);

  isPalindromo = phrase === invertPrase;

  isPalindromo
    ? console.log('A frase é um Palindromo')
    : console.log('A frase não é um Palindromo');
}

testPalindrmo('amar é rama');
testPalindrmo('eu, tu e eles');

//versão 2 manual
const phrase2 = 'amar é rama';
const arrayPhrase2 = phrase2.split('');

for (let i = 0; i < arrayPhrase2.length; i++) {
  if (arrayPhrase2[i] !== arrayPhrase2[arrayPhrase2.length - i - 1]) {
    console.log(arrayPhrase2.length - i - 1);
    console.log(arrayPhrase2[i]);

    console.log('Frase não é um Palindromo');
    break;
  } else if (i === arrayPhrase2.length - 1) {
    console.log('frase é um palindromo');
  }
}
