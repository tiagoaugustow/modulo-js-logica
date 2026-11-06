const prompt = require("prompt-sync")();

const t1 = Number(prompt(""));
const t2 = Number(prompt(""));
const t3 = Number(prompt(""));

let ouro, prata, bronze;

if (t1 < t2 && t1 < t3) {
  ouro = 1;
  if (t2 < t3) {
    prata = 2;
    bronze = 3;
  } else {
    prata = 3;
    bronze = 2;
  }
} else if (t2 < t1 && t2 < t3) {
  ouro = 2;
  if (t1 < t3) {
    prata = 1;
    bronze = 3;
  } else {
    prata = 3;
    bronze = 1;
  }
} else {
  ouro = 3;
  if (t1 < t2) {
    prata = 1;
    bronze = 2;
  } else {
    prata = 2;
    bronze = 1;
  }
}

console.log("Ouro: " + ouro);
console.log("Prata: " + prata);
console.log("Bronze: " + bronze);