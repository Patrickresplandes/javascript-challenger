//Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
const toUpperCase = (str) => {
  return str.toUpperCase();
};

const textoMinusculo = 'somente teste de retorno'
const textMaiusculo = toUpperCase(textoMinusculo)
console.log(textMaiusculo)

//Escreva uma função que recebe duas strings como argumento e concatena-as em uma única string com um espaço entre elas.
const concatStrings = (str1, str2) => {
  return str1 + "" + str2
};

const argumento1 = 'Olá, prazer em conhecer'
const argumento2 = 'a agronorte'

const resultadoConcatenacao = concatStrings(argumento1, argumento2)
console.log(resultadoConcatenacao)

//Crie uma função que recebe uma string como argumento e retorna o número de caracteres nessa string.
const numberString = (str) => {
  return str.length;
};

const textLetras = 'argumento de retorno'
const contagemCaracteres = numberString(textLetras)
console.log(contagemCaracteres)

//Crie uma função que receba uma palavra, e uma frase. Você deve verificar se existe esta palavra nesta frase e retornar true ou false.
const existKeyword = (keyword, str) => {

  //colocamos as palavra e frase em minuscula para falicitar a busca na comparação das palavras
  const fraseMinuscula = keyword.toLowerCase();
  const palavraMinuscula = str.toLowerCase();

  //Aqui faz a verificação se a palavra existe
  return  palavraMinuscula.includes(fraseMinuscula);
}

const frase = 'a noite está bela'
const palavraFrase = 'noite'
const procuraPalavra = existKeyword(palavraFrase, frase)
console.log(procuraPalavra);

//Escreva uma função que recebe um array de números como argumento e retorna a soma de todos os números no array.
const sumAllItemsInArray = (arr) => {
  let soma = 0;
  for (let i=0 ; i < arr.length ; i++) {
    soma += arr[i]
  }
  return soma;
};

const listaNumeros = [1, 5, 9, 4, 7, 8]
const somatorioLista = sumAllItemsInArray(listaNumeros)
console.log(somatorioLista)

//Você receberá uma lista com nomes de usuarios, verifique se um usuario existe neste array e retorne true ou false.
const verifyUserInArray = (strArr, str) => {
  //podemos usar o metedo includes para verificar se o nome existe
  return strArr.includes(str);
};

const nomesUser = ['Patrick', 'Junior', 'Cardoso', 'Maria', 'Cris']
const userExist = verifyUserInArray(nomesUser,'Cris')
console.log(userExist)

//Escreva uma função que recebe dois números como argumento e retorna a soma deles.
const sumNumber = (num1, num2) => {
  return num1 + num2;
};
const resultadoNumeros = sumNumber(5, 3)
console.log(resultadoNumeros)

//Crie uma função que recebe um número como argumento e verifica se ele é par ou ímpar retornando  a string "par" ou "impar"
const verifyNumberIsPairOrOdd = (num) => {

  //aqui iremos verificar se o num divido por 2 é igual a zero, caso for zero retorna Par, se não Impar
  if( num % 2 === 0 ){
    return "par";
  } else {
    return "impar";
  }
};

const numero = 5 
const verificaNumero = verifyNumberIsPairOrOdd(numero);
console.log(verificaNumero);

module.exports = {
  toUpperCase,
  concatStrings,
  numberString,
  existKeyword,
  sumAllItemsInArray,
  verifyUserInArray,
  sumNumber,
  verifyNumberIsPairOrOdd,
};
