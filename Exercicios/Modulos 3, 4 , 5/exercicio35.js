const vetorPilha    = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

for (let i = 0; i < vetorAdiciona.length; i++) {
    console.log('Vetor adicionado: ' +vetorAdiciona[i]);
    vetorPilha.push(vetorAdiciona[i]);
}

console.log(vetorPilha);