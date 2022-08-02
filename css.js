const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let entradaDados = [];
let saidaDados = "sair";
rl.question("Quais itens do CSS você quer inserir? \n", (userInput) => {
  if (userInput.trim() == saidaDados) {
    rl.close();
    console.log(
      "Já vai sair? Espero que tenha organizado sua lista em ordem alfabética! Até mais!"
    );
  } else {
    rl.setPrompt("Qual o próximo dado?\n");
    entradaDados.push(userInput.trim());
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == saidaDados) {
        rl.close();
        entradaDados.sort();
        for (let i = 0; i < entradaDados.length; i++) {
          console.log(entradaDados[i]);
        }
        console.log("Você finalizou sua lista" + entradaDados.sort());
      } else {
        rl.setPrompt("Insira a proxima linha ou digite sair para finalizar \n");
        rl.prompt();
        entradaDados.push(userInput.trim());
      }
    });
  }
});
