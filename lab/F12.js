
const jogador = { nome: "Davi", pontos: 100, nivel: 1 };


const proximoNivel = jogador.nivel + 1;
const pontosAlvo = proximoNivel * 100;
const faltam = pontosAlvo - jogador.pontos;


console.log("Jogador: " + jogador.nome);
console.log("Nível: " + jogador.nivel);
console.log("Faltam " + faltam + " pontos para o nível " + proximoNivel);