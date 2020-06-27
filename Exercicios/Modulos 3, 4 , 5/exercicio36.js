const vetorMultiplicado1 = (vetor, multiplicador) => {
    const vetorResultado = [];
    for (let i = 0; i < vetor.length; i++) {
        vetorResultado.push(vetor[i] * multiplicador);
    }
    return vetorResultado;
}

const vetorMultiplicado2 = (vetor, multiplicador) => {
    if (multiplicador > 5) {
        return vetorMultiplicado1(vetor, multiplicador);
    }
    return 'Multiplicador deve ser maior que 5';
};

const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(vetorMultiplicado1(vetor1, 5));
console.log(vetorMultiplicado2(vetor1, 6));