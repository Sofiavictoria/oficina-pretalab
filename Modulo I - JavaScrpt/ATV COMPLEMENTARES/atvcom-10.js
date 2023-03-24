/* Atividade 10- Defina 3 constantes que salvam valores numericos diferentes. Utilize 
if/else para escrever um codigo que retorne o maior dos três numeros  */

const numero1 = 11;
const numero2 = 1;
const numero3 = 2;

if(numero1 > numero2 && numero1 > numero3 ){
    console.log(numero1 + " é o maior dos 3!");
}else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + " é maior dos 3!");
}else if (numero3 > numero1 && numero3 > numero2){
    console.log(numero3 + " é maior dos 3!");
}

