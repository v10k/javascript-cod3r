const calculaMedia = vetor => {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    console.log(soma / vetor.length);
}

calculaMedia([1, 2, 3, 4, 5]);