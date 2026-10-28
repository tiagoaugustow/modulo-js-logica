// const medias = [8.5, 9, 6, 7, 8.5, 7, 7];
// const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Júnior"];
// const mediadaescola = 7;

const PromptSync = require("prompt-sync");

// console.log(medias[3] + " " + nomes[3]) // Diego 7
// console.log(medias[1]) //9
// console.log(medias[5]) //7
// console.log(medias[4]) //8.5
// console.log(medias.length) //7

// for (let i = 0; i < nomes.length; i++){
//     // i = 0
//     if
//     console.log("O Aluno" + nomes[i] + "Está aprovado")
// } 

// else {
//     newFunction();
// }
//     console.log("O Aluno" + nomes[i] + "Está reprovado")
const prompt = require("prompt-sync")()

const medias = []
const mediaDaEscola = 7;
let input;
while (input != -1) {
    while (input < 0 || isNaN (input))
        console.log("Valor Inválido")
    input = Number(prompt("Média do próximo aluno: "))
}
input = Number(prompt("Média do próximo aluno: "))
medias.push (input)

console.log (medias)