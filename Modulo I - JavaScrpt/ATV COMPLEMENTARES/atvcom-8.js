/* Criar uma constante que recebe nota de uma pessoa candidata em um desafio tecnico
e atribua a ela um valor entre 1 e 100. 
Implemente uma logica que verifique se a pessoa candidata foi aprovada, reprovada ou 
se essa oessia esta na lista de espera. 
------------------------------------------------------
Criar uma estrutura condicional utilizando o if,else if e else para criar o seu algoritmo, e os operadores 
logicos que se aplicam a cada situação. 
Altere o valor da nota para verificar se as condições que voce implmentou funcionam. 
------------------------------------------------------
- Se a nota for maior ou igual a 80, imprima "Parabéns, você faz parte do grupo das pessoas aprovadas!"
- Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
- Se a nota for menor que 60, imprima "Infelizmente, você reprovou.*/

const nota = 100;  //constante para nota 

if (nota >= 80){
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
}else if (nota >= 60  && nota < 80){
    console.log("Você está na nossa lista de espera.");
}else if (nota < 60){
    console.log("Infelizmente, você reprovou.");
}