/*Exercicio 10: Um número perfeito é aquele que é igual à soma dos seus divisores positivos, exceto ele mesmo. 
Por exemplo, 6 é um número perfeito, pois 6 = 1 + 2 + 3. Escreva um código em JavaScript que receba um número "num" como entrada 
e imprima no console se "num" é perfeito ou não.*/

let num = 8;
let soma = 0;

for (i = 1; i < num - 1; i++) {
  if (num % i === 0) {
    soma = soma + i;
  }
}
if (soma === num) {
  console.log(`O número ${num} é perfeito.`);
} else {
  console.log(`O número ${num} não é perfeito`);
}