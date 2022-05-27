const prompt = require("prompt-sync")();
console.clear();

let nome = prompt("Crie seu nome de usuário: ");
let senha = prompt("Crie sua senha: ");
while (nome == senha) {
  console.log(
    "Você não pode utilizar nome e senha iguais! Por favor, utilize outra senha!"
  );
  nome = prompt("Crie seu nome de usuário: ");
  senha = prompt("Crie uma senha diferente de seu usuário: ");
}

console.log(`Olá ${nome}! Você está logado com sucesso!`);