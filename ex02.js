const prompt = require("prompt-sync")();
console.clear();
/*




*/

let infosValidas = false;

while (!infosValidas) {
  let nome = prompt("Digite seu nome: ");
  let idade = +prompt("Digite sua idade: ");
  let salario = +prompt("Digite seu salário: ");
  let estadoCivil = prompt("Digite seu estado civil: (S,C,V,D)");
  
  if (nome.length <= 3) {
    console.log("Nome inválido, por favor digite outro.");
    nome = prompt("Digite seu nome: ");
  }

  if (idade <= 0 || idade >= 150) {
    console.log("Idade inválida, por favor digite outra.");
    idade = +prompt("Digite sua idade: ");
  }

  if (salario <= 0) {
    console.log("Salario inválido, por favor digite outro.");
    salario = +prompt("Digite seu salário: ");
  }

  if (
    estadoCivil != "s" &&
    estadoCivil != "c" &&
    estadoCivil != "d" &&
    estadoCivil != "v"
  ) {
    console.log("Estado civil inválido, por favor digite outro.");
    estadoCivil = prompt("Digite seu estado civil: ");
  }
  infosValidas = true;
}
