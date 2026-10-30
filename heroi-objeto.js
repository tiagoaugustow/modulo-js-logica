// ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const heroi = {
    nome: "Bergkamp",
    vida: 10
}

// Teste de alteração da propriedade, ao mudar da CONSTANTE heroi
// eu consigo sem problemas, pois estou mudando uma propriedade da constante
// e não a connstante em si.

console.log("Antes de mudar: ", heroi)

heroi.nome = "Bergkamp"

console.log("Depois de mudar: ". heroi)