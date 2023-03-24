/* Atividade 6 - Crie uma variavel chamda diaDaSemana que receba string "quarta-feira". Utilizando if/else, implemente condicionais  para que:
a) Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", 
o console.log imprima a seguinte mensagem: "Oba, mais um dia de aprendizado em JavaScript :D" 
Se for algum dia de fim de semana:
“FINALMENTE, descanso merecido”*/
 
let diaDaSemana = "segunda-feira";

if (
    diaDaSemana === "segunda-feira" ||
    diaDaSemana === "terça-feira" ||
    diaDaSemana === "quarta-feira" ||
    diaDaSemana === "quinta-feira" ||
    diaDaSemana === "sexta-feira"
  ) {
    console.log("Oba, mais um dia de aprendizado em JavaScript :D");
  } else {
    console.log("FINALMENTE, descanso merecido");
  }
  
/* let diaDaSemana = "quarta-feira
if (
  diaDaSemana === "segunda-feira" ||
  diaDaSemana === "terça-feira" ||
  diaDaSemana === "quarta-feira" ||
  diaDaSemana === "quinta-feira" ||
  diaDaSemana === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado em JavaScript :D");
} else {
  console.log("FINALMENTE, descanso merecido");
}
" */