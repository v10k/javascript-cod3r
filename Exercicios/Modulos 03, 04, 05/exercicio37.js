const progressaoAritmetica = (n, a1, r) => {
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += a1 + r * i;
        console.log(a1 + r * i);
    }
    console.log(`Soma: ${soma}`);
}

const progressaoGeometrica = (n, a1, r) => {
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += a1 * (r ** i);
        console.log(a1 * (r ** i));
    }
    console.log('Soma: ' + soma);
}

progressaoAritmetica(10, 10, 15);
console.log('\n\n-------------');
progressaoGeometrica(10, 5, 3)