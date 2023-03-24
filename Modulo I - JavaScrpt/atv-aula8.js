//Exercicio 1 :Escreva um código JavaScript para exibir os números de 1 até 1000 na tela.
for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }

//Exercicio 2: Encontre e exiba na tela todos os números pares entre 1 e 200.
for(let i =1; i<=200; i++){
    console.log(i);
}

/*Exercicio 3: Júlia gosta de se esconder, porém não gosta de contar. Ela pediu para vocês criarem um código JavaScript para 
contar até 10 e quando acabar a contagem, imprimir a mensagem na tela: “Prontas ou não, lá vou eu!!!”*/
for(let i = 1; i<=10; i++){
    console.log(i);
}
    console.log("Prontas ou não,lá vou eu!!!");

//Exercicio 4:  Como Julia é indecisa, agora ela teve a ideia de fazer uma mudança e pediu para que a contagem fosse de 10 até 0 e após imprimir na tela a mesma frase.
for(let i = 10; i >= 1; i--) {
    console.log(i);
  }
  console.log("Pronta ou não,lá vou eu");

//Exercicio 5: Vamos ajudar, Júlia? Ela precisa estudar a tabuada do 9. Em código JavaScript, crie uma tabuada do 9 e armazene, em seguida, imprima em tela.
for (i = 0; i <= 10; i++) {
    a = i * 9;
    console.log(`${i} x 9 =  ${a}`);
  }
//Exercicio 6:Imprima os números de 0 até 40 na tela e em seguida, quantos números pares e quantos números ímpares foram impressos.
let P = 0;
let I = 0

for (let j = 0; j <= 40; j++){
    if (j % 2 === 0) {
      P++
    } else {
      I++
    }
  }
  console.log(`Entre 0 e 40, há ${P} números pares e ${I} números ímpares.`);
//Exercicio 7:Dado um numero qualquer, crie um código em Javascript que diga se ele é primo ou não.
const numero = 12;
let resposta = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) resposta = false;
}
console.log(`${numero} é um numero primo primo? ${resposta}`);
//Exercicio 8:Mostre na tela os números primos que estão entre o número 0 e o 400.
for (let i = 2; i <= 400; i++) {
    let ePrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        ePrimo = false;
      }
    }
    if (ePrimo === true) {
      console.log(i);
    }
  }
//Exercicio 9: Você já ouviu falar na Sequência de Fibonacci? É uma sequência de números, onde o número 1 é o primeiro e segundo termo da ordem e os demais são originados pela soma de seus antecessores. Como demonstrado abaixo:
/*Dentre todos os mistérios da Matemática, a sequência de Fibonacci é considerada uma das fascinantes descobertas, o que faz dessa ordem de números, uma descoberta especial, é a sua ligação com os fenômenos da natureza. Bom, dito isso, escreva um código JavaScript para imprimir no console a sequência de fibonacci com base no número passado. Por exemplo, dado que o número é 9, o console exibirá: O Fibonacci de 9 é igual a 34. */

/*Exercicio 10: Um número perfeito é aquele que é igual à soma dos seus divisores positivos, exceto ele mesmo. 
Por exemplo, 6 é um número perfeito, pois 6 = 1 + 2 + 3. Escreva um código em JavaScript que receba um número "num" como entrada 
e imprima no console se "num" é perfeito ou não.*/

