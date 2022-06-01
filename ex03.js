const prompt = require("prompt-sync")();
console.clear();

/* 
Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
*/

let num = +prompt("Digite um numero par: ");
while((num%2 != 0)){
    console.log("O número digitado é ímpar.");
    num = +prompt("Por favor, digite um número par: ");
}