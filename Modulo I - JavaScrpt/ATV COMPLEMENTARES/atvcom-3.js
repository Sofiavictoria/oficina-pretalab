/* Ativiadade 3 - Algumas operações simples. Queremos imprimir a area e o perimetro de um retangulo,
sabemos que a base do retangulo é 5 e altura 8 */

/*1- variavel que receba o valor da base do retangulo 
2- valor da altura do retangulo 
3- Variavel para fazer calculo da area e dps do perimetro 
area = a*b
perimetro = 2(a+b) */

const alturaretangulo = 8; 
const baseretangulo = 5;

const areadoretangulo = alturaretangulo * baseretangulo;
console.log(areadoretangulo); 

const perimetroretangulo = 2*(alturaretangulo + baseretangulo);
console.log(perimetroretangulo);

console.log(`retangulo possui altura ${alturaretangulo} e a base ${baseretangulo} . Possui area ${areadoretangulo} e um Perimetro ${perimetroretangulo} `);