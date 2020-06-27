const vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

const percoreVetor = (vetor => {
    let dentroIntervalo = 0, foraIntervalo = 0;
    for (let i = 0; i < vetor.length; i++) {
        (vetor[i] >= 10 && vetor[i] <= 20) ? dentroIntervalo++ : foraIntervalo++;
    }
    console.log(`${dentroIntervalo} numeros dentro do intervalo`);
    console.log(`${foraIntervalo} numeros fora do intervalo`);
})(vetor);

