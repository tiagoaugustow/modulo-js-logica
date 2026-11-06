const prompt = require("prompt-sync")();

const n1 = Number(prompt(""));
const n2 = Number(prompt(""));
const n3 = Number(prompt(""));

const media = (n1 + n2 + n3) / 3;

console.log("Média: " + media.toFixed(1));