/*Atvidade 15- Utilize if/else para escrever um código que define três constantes com os valores dos três ângulos internos de um triângulo. 
O programa deve retornar true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
-Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
-Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Um ângulo será considerado inválido se não 
tiver um valor positivo.*/

const angulo1 = 60;
const angulo2 = 33;
const angulo3 = 87;

const angulosvalidos = angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0;
const somadosangulos = angulo1 + angulo2 + angulo3;
    //as somas dos angulos tem que ser 180 

if (somadosangulos === 180 && angulosvalidos === true){
    console.log(true);
}else{
    console.log(false);
}
