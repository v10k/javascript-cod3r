const conceitosNotas = notas => {
    const classificação = [];
    for (let i = 0; i < notas.length; i++) {
        switch(true) {
            case notas[i] >= 0 && notas[i] < 4.9:
                classificação.push(`A nota ${notas[i]} tem a classificação D`);
                break;
            case notas[i] >= 5 && notas[i] < 7:
                classificação.push(`A nota ${notas[i]} tem a classificação C`);
                break;
            case notas[i] >= 7 && notas[i] < 9:
                classificação.push(`A nota ${notas[i]} tem a classificação B`);
                break;
            case notas[i] >= 9 && notas[i] <= 10:
                classificação.push(`A nota ${notas[i]} tem a classificação A`);
                break;
            default:
                classificação.push(`A Nota ${notas[i]} é inválida`);
        }
    }
    return classificação;
}

const notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
console.log(conceitosNotas(notas));