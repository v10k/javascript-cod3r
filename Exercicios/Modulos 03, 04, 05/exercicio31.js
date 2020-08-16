const contaNumerosNegativos = vetor => {
    let count = 0;
    vetor.forEach(valor => {
        if (valor < 0) {
            count++;
        }
    });
    console.log(count + ' Numeros negativos');
}

contaNumerosNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]);