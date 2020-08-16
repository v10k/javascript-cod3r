const calculaPontuacao = pontuacoes => {
    const pontos = pontuacoes.split(', ');
    let maxMin = [pontos[0], pontos[0]];
    let melhorPior = [1, 1];

    pontos.forEach((valor, indice) => {
        if (maxMin[0] < valor) {
            maxMin[0] = valor;
            melhorPior[0]++;
        }
        else if (maxMin[1] > valor) {
            maxMin[1] = valor;
            melhorPior[1] = indice + 1;
        }
    });

    return melhorPior;
}

console.log(calculaPontuacao('10, 20, 20, 8, 25, 3, 0, 30, 1'));
console.log(calculaPontuacao('30, 40, 20, 4, 51, 25, 42, 38, 56, 0'));