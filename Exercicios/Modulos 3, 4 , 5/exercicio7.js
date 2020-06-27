const bhaskara = (ax2, bx, c) => {
    const delta = bx ** 2 - 4 * ax2 * c;
    if (delta < 0) {
        return 'Delta é negativo';
    }
    const resultado = [];
    let formula = -bx + Math.sqrt(delta);
    formula = ((formula) / (2 * ax2));
    resultado.push((-bx + (Math.sqrt(delta))) / (2 * ax2));
    resultado.push((-bx - (Math.sqrt(delta))) / (2 * ax2));
    return resultado;
}

console.log(bhaskara(3, -15, 12));
console.log(bhaskara(9, -24, 16));
console.log(bhaskara(1, 3, 2));
console.log(bhaskara(1, -2, 4));
