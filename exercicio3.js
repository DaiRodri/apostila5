//Dado um array de números, encontre e exiba o maior valor presente no array.

let numero = [5, 10, 15, 20, 25, 30];
let max = Math.max(...numero); // Usa o operador spread para passar os elementos do array
console.log(max); // Imprime o maior número