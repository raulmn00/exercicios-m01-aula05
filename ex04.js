const prompt = require("prompt-sync")();
console.clear();

/* 
Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10
 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, 
 e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
*/

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
