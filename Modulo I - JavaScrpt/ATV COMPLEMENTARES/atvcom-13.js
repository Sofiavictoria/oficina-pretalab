/* Atividade 13- Utilize if/else para escrever um codigo que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
Siga essas regras: 
Porcentagem >= 90 -> A
porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O codigo deve retornar uma mensagem de erro se a nota passada for menor que 0 ou a maior que 100*/

const Nota = 98;

 if (Nota > 100 || Nota < 0){
    console.log("Nota invalida!!");
}else if (Nota >= 90){
    console.log("A")
}else if (Nota >= 80){
    console.log("B");
}else if(Nota >= 70){
    console.log("C");
}else if (Nota >= 60){
    console.log("D");
}else if(Nota >= 50){
    console.log("E");
}else if (Nota < 50){
    console.log("F");
}
