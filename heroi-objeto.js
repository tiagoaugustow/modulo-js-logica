// ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const heroi = {
    nome: "Bergkamp",
    vida: 10,
    dano: 3,
    veneno: 0,
    inventario: [],
    sorte: 0.4,
    experiencia: 0,
    mana: 0,
    critico: 0.2,
    danoCritico: 2
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 5,
    chanceVeneno: 0.3,
    veneno: 3
}

// Teste de alteração da propriedade, ao mudar da CONSTANTE heroi
// eu consigo sem problemas, pois estou mudando uma propriedade da constante
// e não a connstante em si.

console.log("Antes de mudar: ", heroi)

heroi.nome = "Bergkamp"

console.log("Depois de mudar: ", heroi)

function calculoDanoAranha(heroi, aranha){
    chance = Math.random();
    if (chance >= aranha.chanceVeneno){
        heroi.veneno = aranha.veneno
    console.log("O heroi tomou veneno, e se sente muito mal", heroi.veneno)
}
    heroi.vida = heroi.vida - aranha.dano
    console.log("A aranha te arranhou. você tomou: ", aranha.dano, "sua vida: ", heroi.vida)
}