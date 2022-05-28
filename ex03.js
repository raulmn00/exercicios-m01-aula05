const prompt = require("prompt-sync")();
console.clear();

let num = +prompt("Digite um numero par: ");
while((num%2 != 0)){
    console.log("O número digitado é ímpar.");
    num = +prompt("Por favor, digite um número par: ");
}