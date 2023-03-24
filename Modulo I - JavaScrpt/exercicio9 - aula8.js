//Exercicio 9: Você já ouviu falar na Sequência de Fibonacci? É uma sequência de números, onde o número 1 é o primeiro e segundo termo da ordem e os demais são originados pela soma de seus antecessores. Como demonstrado abaixo:
/*Dentre todos os mistérios da Matemática, a sequência de Fibonacci é considerada uma das fascinantes descobertas, o que faz dessa ordem de números, uma descoberta especial, é a sua ligação com os fenômenos da natureza. Bom, dito isso, escreva um código JavaScript para imprimir no console a sequência de fibonacci com base no número passado. Por exemplo, dado que o número é 9, o console exibirá: O Fibonacci de 9 é igual a 34. */
const num = 9;

let soma = 0;
let anterior = 0;
let proximo = 1;

for (let i = 0; i < num; i++) {
  soma = anterior + proximo;
  anterior = proximo;
  proximo = soma;
}
console.log(`Fibonacci de ${num} é ${anterior}`);