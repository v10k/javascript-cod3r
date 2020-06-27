const parOuImpar = vetor => {
    let parImpar = [0, 0]
    vetor.forEach(valor => {
        (valor % 2 === 0) ? parImpar[0]++ : parImpar[1]++;
    });
    console.log('Pares: ' + parImpar[0]);
    console.log('Ímpares: ' + parImpar[1]);
}

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
parOuImpar(vetor);
