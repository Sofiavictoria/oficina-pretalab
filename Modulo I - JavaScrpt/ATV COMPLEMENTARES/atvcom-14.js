/*Atividade 14- Utilize if/else para escrever um código que se inicie com duas constantes declaradas: uma para o custo de um 
produto e outra para o seu valor de venda. A partir desses valores, calcule quanto de lucro (valor de venda, descontado o custo 
do produto) a empresa terá ao vender mil desses produtos. 
Seu código também deve mostrar um console com mensagem de erro caso algum dos seus valores de entrada seja menor que zero.*/

const custo = 14;
const venda = 22;

const lucro = venda - custo;

if (custo > 0 && venda > 0){
    console.log("Seu lucro é: " + lucro * 1000);
}else{
    console.log("Valor invalido!!!");
}