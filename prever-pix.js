const prompt = require("prompt-sync")();
let valor = Number(prompt("Valor do Pix: "));

while (valor <= 0 || isNaN(valor)) {
    console.log("Valor inválido");
valor = Number(prompt("Valor do Pix: "));
}

console.log("Pix de R$", valor.toFixed(2));