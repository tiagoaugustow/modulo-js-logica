const prompt = require("prompt-sync")();

const vitA = Number(prompt(""));
const empA = Number(prompt(""));
const saldoA = Number(prompt(""));
const vitB = Number(prompt(""));
const empB = Number(prompt(""));
const saldoB = Number(prompt(""));

const pontosA = (vitA * 3) + (empA * 1);
const pontosB = (vitB * 3) + (empB * 1);

if (pontosA > pontosB) {
  console.log("Time A");
} else if (pontosB > pontosA) {
  console.log("Time B");
} else if (saldoA > saldoB) {
  console.log("Time A");
} else if (saldoB > saldoA) {
  console.log("Time B");
} else {
  console.log("Empate");
}