/*Exemplo 1 - Vamos declarar uma variável e iniciá-la em 0 para, em seguida, usar o while e passar a instrução que, 
enquanto nossa variável for menor que 11, a multiplicaremos por 5 (resultando na tabuada do 5). 

let i = 0;

while(i<11){
    console.log(`${i} x 5 = ${i*5}`)
    i++
}

/*Exemplo 2 - Vamos declarar uma variável e iniciá-la em 0. Enquanto for menor que 5 (condição passada no bloco do while),
 ela passará novamente pelo bloco do e acrescentará um número inicial de variável. 
 let i = 0; */

do {
    console.log("O contador vale:" + i);
    i++;
} while (i < 5)

/*Pratica 1- Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100 
(DICA: O operador de exponenciação (**) retorna o resultado de elevar o primeiro operando à potência do segundo operando). */
let Par = 0;
let i = 1;

while(i < 100){
       if(i%2 == 0){
       Par = i
   console.log(Par**2)
   }
   i++
}