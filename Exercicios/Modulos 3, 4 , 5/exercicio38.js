const imprimeImpares = (inicio = 0, fim = 100) => {
    if (inicio > fim) {
        let aux = inicio;
        inicio = fim;
        fim = aux;
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

imprimeImpares(19, 3);
imprimeImpares(190, 30);

