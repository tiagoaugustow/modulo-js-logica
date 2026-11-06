const prompt = require("prompt-sync")();

const D = Number(prompt(""));
const M = Number(prompt(""));

let saldo = 0;
let meses = 0;

while (saldo < M) {
  // Começo do mês: deposita
  saldo += D;
  
  // Fim do mês: rende 0,5%
  saldo += saldo * 0.005; 
  
  // Passou um mês
  meses++;
}

console.log("Meses: " + meses);
console.log("Saldo: R$ " + saldo.toFixed(2));