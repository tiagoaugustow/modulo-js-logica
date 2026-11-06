const jogos = [""];

let totalPontos = 0;
let sequenciaAtual = 0;
let maiorSequencia = 0;

for (let i = 0; i < jogos.length; i++) {
  let resultado = jogos[i];

  if (resultado === "V") {
    totalPontos += 3;
    sequenciaAtual++;
  } else if (resultado === "E") {
    totalPontos += 1;
    sequenciaAtual++;
  } else if (resultado === "D") {
    sequenciaAtual = 0;
  }

  if (sequenciaAtual > maiorSequencia) {
    maiorSequencia = sequenciaAtual;
  }
}

console.log("Pontos: " + totalPontos);
console.log("Maior sequência sem derrota: " + maiorSequencia);