const  prompt = require("prompt-sync")()
  
const tarifaBase = 5;
const precoPorKm = 2;
const valorPorMinuto = 0.5;

let km = Number(prompt("quantos km tem a corrida?"));
let minuto = Number(prompt("quantos minutos tem a corrida?"));
let valorDaCorrida = tarifaBase + precoPorKm * km + minuto * valorPorMinuto

console.log("R$: " + valorDaCorrida.toFixed(2)) 
