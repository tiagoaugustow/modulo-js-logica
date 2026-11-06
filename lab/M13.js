
const movimentos = [-50, -20];
const saldoInicial = 100;

let totalEntradas = 0;
let totalSaidas = 0;

for (let i = 0; i < movimentos.length; i++) {
  let mov = movimentos[i];

  if (mov > 0) {
    totalEntradas += mov;
    console.log("Entrada: R$ " + mov.toFixed(2));
  } else if (mov < 0) {
    let saidaPositiva = mov * -1;
    totalSaidas += saidaPositiva;
    console.log("Saída: R$ " + saidaPositiva.toFixed(2));
  }
}

const saldoFinal = saldoInicial + totalEntradas - totalSaidas;

console.log("Entradas: R$ " + totalEntradas.toFixed(2));
console.log("Saídas: R$ " + totalSaidas.toFixed(2));
console.log("Saldo final: R$ " + saldoFinal.toFixed(2));