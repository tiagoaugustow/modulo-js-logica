const prompt = require("prompt-sync")();

function converter(valor, escala) {
  if (escala === "C") {
    let f = (valor * 9 / 5) + 32;
    return "Resultado: " + f.toFixed(1) + " F";
  } else if (escala === "F") {
    let c = (valor - 32) * 5 / 9;
    return "Resultado: " + c.toFixed(1) + " C";
  } else {
    return "Escala inválida";
  }
}

const valor = Number(prompt(""));
const escala = prompt("");

const resposta = converter(valor, escala);
console.log(resposta);