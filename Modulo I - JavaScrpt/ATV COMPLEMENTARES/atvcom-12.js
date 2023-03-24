/*Atvidade 12 - Crie uma constante chamada "horarioAtual", que receba um numero entre 4 e 24
de sua escolha, para representar as horas do dia. Crie uma variavel chamada "mensagem" 
que inicialmente, é uma string vazia. 
Implemente condicionas para que: 
- Se o horario for maior ou igual a 22, atribua "Não deveriamos comer nada, é hora de dormir" na variavel "mensagem". 
- Se o horario for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variavel "mensagem".
- Se o horario for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde? na variavel "mensagem".
- Se o horario for maior ou igual a 11 e menor que 14, insira "Hora do almoço!!!" na variavel "mensagem".
Por fim,de um console.log na variavel "mensagem". */

const horarioAtual = 12;
let mensagem = "";

if (horarioAtual >= 22){
    mensagem = "Não deveriamos comer nada, é hora de dormir";
}else if (horarioAtual >= 18 && horarioAtual < 22){
    mensagem = "Rango da noite, vamos jantar :D"
}else if (horarioAtual >= 14 && horarioAtual < 18){
    mensagem = "Vamos fazer um bolo pro café da tarde?"
}else if (horarioAtual >= 11 && horarioAtual < 14){
    mensagem = "Hora do almoço!!!"
}else if (horarioAtual >= 4 && horarioAtual <11){
    mensagem = "Humm, cheiro de café recém-passado";
}

console.log(mensagem);