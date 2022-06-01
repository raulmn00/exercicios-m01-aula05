const prompt = require("prompt-sync")();
console.clear();
/*
Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
*/

let infosValidas = false;

while (!infosValidas) {
  if (infosValidas == false) {
    let nome = prompt("Digite seu nome: ");
    if (nome.length <= 3) {
      console.log("INFORMAÇÕES INCORRETAS, TENTE NOVAMENTE!");
      continue;
    }

    let idade = +prompt("Digite sua idade: ");
    if (idade <= 0 || idade >= 150) {
      console.log("INFORMAÇÕES INCORRETAS, TENTE NOVAMENTE!");
      continue;
    }
    let salario = +prompt("Digite seu salário: ");
    if (salario <= 0) {
      console.log("INFORMAÇÕES INCORRETAS, TENTE NOVAMENTE!");
      continue;
    }
    let estadoCivil = prompt(
      "Digite seu estado civil: (S,C,V,D)"
    ).toLocaleLowerCase();
    if (
      estadoCivil != "s" &&
      estadoCivil != "c" &&
      estadoCivil != "d" &&
      estadoCivil != "v"
    ) {
      console.log("INFORMAÇÕES INCORRETAS, TENTE NOVAMENTE!");
      continue;
    }
  }
  infosValidas = true;
}
