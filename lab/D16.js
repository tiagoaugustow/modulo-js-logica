const numeros = [42];

// Processamento (A Função)
function ordenar(lista) {
  // 1. Criar uma cópia exata para não quebrar a regra de manter a original intacta
  const copia = [];
  for (let i = 0; i < lista.length; i++) {
    copia.push(lista[i]);
  }

  // 2. Ordenar a cópia comparando os vizinhos (Lógica de troca)
  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1; j++) {
      
      // Se o número da esquerda for maior que o da direita, eles trocam de posição
      if (copia[j] > copia[j + 1]) {
        let aux = copia[j];           // Guarda o valor da esquerda na variável temporária
        copia[j] = copia[j + 1];      // A gaveta da esquerda recebe o valor da direita
        copia[j + 1] = aux;           // A gaveta da direita recebe o valor guardado
      }
      
    }
  }

  return copia; // Devolve apenas a lista nova já organizada
}

const listaOrdenada = ordenar(numeros);

console.log("Ordenada: " + listaOrdenada.join(" "));
console.log("Original: " + numeros.join(" "));