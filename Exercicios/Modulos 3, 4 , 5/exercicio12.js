const fatorial = n => {
    if (n === 0) {
        return 1;
    }
    let aux = n - 1;
    while (aux > 1) {
        n *= aux;
        aux --;
    }
    return n;
}

console.log(fatorial(5));
console.log(fatorial(1));
console.log(fatorial(0));


const fatorialRecursivo = n => {
    if (n === 0) {
        return 1;
    }
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));