const prompt = require("prompt-sync")();
console.clear();

let random = Math.floor(Math.random() * (10 - 0) + 0);
let qtdTentativas = 1;

let numUser = +prompt("Tente adivinhar o número do computador: ");
while (numUser != random) {
  console.log("Valor incorreto, tente novamente...");
  random = Math.floor(Math.random() * (10 - 0) + 0);
  numUser = +prompt("Tente adivinhar o número do computador: ");
  qtdTentativas++;
}
console.log(
  `Você acertou o número do computador, e só precisou de ${qtdTentativas} tentativas para conseguir!`
);
