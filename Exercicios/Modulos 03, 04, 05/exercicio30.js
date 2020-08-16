const maiorEMenor = vetor => {
    vetor.sort((a, b) => a - b);
    console.log(`Maior valor do vetor: ${vetor[vetor.length - 1]}`);
    console.log(`Menor valor do vetor: ${vetor[0]}`);
}

const vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];
maiorEMenor(vetor);