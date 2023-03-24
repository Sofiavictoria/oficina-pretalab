// Aula 5 
/* if else */

//exemplo 1
let hora = 10;

if(hora < 12){
    console.log('Bom dia!');
}else{
    console.log('Boa tarde!');
}

/* Exercicio 1 
Declare um valor numérico;
Vamos analisar se esse número é ou não maior que 10:
a) Se for, vamos escrever na tela a seguinte frase: "Esse número é maior que 10";
b) Se não for, vamos escrever na tela a seguinte frase: "Esse número é menor que 10".
Maaasss.. e se esse número for igual a 10? */

let numero = 5;

if(numero > 10){
    console.log("Esse número é maior que 10");
}else if (numero < 10){
    console.log("Esse número é menor que 10");
}

//exemplo 2 
let a = 20,
    b = 20;

if (a > b){
    console.log('a é maior que b');
} else if (a < b){
    console.log('a é menor que b');
} else {
    console.log('a é igual a b');
}

/* Exercicio 2 
 Crie um programa que receba 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100. 
 a) Caso seja maior que 100, retorne "Esse número é maior que 100"; 
 b) Caso seja igual a 100, retorne "Bingo! Deu 100!"; 
 c) Caso seja menor que 100, retorne "Esse número é menor que 100".*/

 const numero1 = 50;
 const numero2 = 50;

const soma = numero1 + numero2;

if(soma > 100){
    console.log("Esse numero é maior que 100");
}else if (soma == 100){
    console.log("Bingo! Deu 100!");
}else{
    console.log("Esse numero é menor que 100");
}

/*const primeiroNome ="Renata",
    ultimoNome = "Pereira",
    anoDenascimento = "1989",
    corPreferida = "laranja",
    hobby = "comer",
    umSentimento = "alegria";

//console.log("Meu nome é " + primeiroNome + " "+ ultimoNome + "..." + umSentimento )
//console.log(`Meu nome é ${primeiroNome} ${ultimoNome} ... ${umSentimento}`)


//----------------------------------- Manipulando Strings

let meuNome = "Renata Nunes Pereira";

//console.log(meuNome.length)

//console.log(meuNome.split(" "))

//console.log(meuNome.replace("Renata","Roberta"))

//----------Estrutura condicional:

let hora = 13;

if(hora < 12){
   let a = "Bom dia!"
}  else if(hora<18){
   let  a = "Boa tarde!"
} else {
    let a = "Boa noite!"
}

console.log(a) */