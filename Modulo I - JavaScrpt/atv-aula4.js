/*aula 4 aprendi sobre concatenação, operadores aritmeticos,
 operadores de de comparação e logico
*/

    //Pratica 1: criar 3 constantes e mostrar no console o valor salvo por nelas 
    const fruta1 = "banana";
    const fruta2 = "maçã";
    const fruta3 = "laranja";
    
    console.log('Essa é a minha lista de frutas: ');
    console.log(fruta1)
    console.log(fruta2)
    console.log(fruta3)
    
    //Simulado hoisting
    console.log(fruta4);
    var fruta4 = "banana";
    
    //Usando let para modificar nossa variavel 
    let fruta5 = "banana";
    console.log("Antes de modificar: " + fruta5);
    
    fruta5 = "melancia";
    console.log("Depois de modificar: " + fruta5);
    
    
    //Pratica 2: Declara e inserir os valores nas seguintes variaveis ou constantes: 
    /*Nome do país, pontos turisticos, capital do país, quantidade de estados
    o país é da America Latina? */
     
    const nomePais = "Brasil";
    const capitalPais ="Brasilia";
    const quantidadeEstados = 26; 
    const pontosTuristico = "Catedral Metropolitana Nossa Senhora Aparecida, Chapada dos Veadeiros";
    const eDaAmericaLatina = true; 
    
        //tradicional 
    console.log("Eu me chamo Sofia e moro no " + nomePais + " que tem " + capitalPais + " como capital. Aqui sou muito feliz pois tenho "+ quantidadeEstados  + " estados para desbravar!");
        // template string 
    console.log(`Eu me chamo Sofia e moro ${nomePais} que tem ${capitalPais} como capital. Aqui sou muito feliz pois tenho ${quantidadeEstados} estados para desbravar!`);
    
    // Também é possivel declarar muitas variaveis em uma declaração: 
    
    let pessoa = "Sofia", Idade = "20", signo = "Touro"; 
    
    
    //pratica 4 
    /*: crie 2 constantes: numero1 e numero2, cada uma contendo um valor numérico. 
    Em seguida, crie mais 5 constantes: soma, subtração, multiplicação, divisão e modulo, 
    que contenha as reespectivas operações usando as constantes numero1 e numero2 */

    const numero1 = 15;
    const numero2 = 20;
    
    const soma = numero1 + numero2;
    const subtração = numero2 - numero1;
    const multiplicação = numero1 * numero2;
    const divisao = numero1 / numero2;
    const modulo = numero1 % numero2;
    
    console.log(soma);
    console.log(subtração);
    console.log(multiplicação);
    console.log(divisao);
    console.log(modulo);

