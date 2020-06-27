const defineTriangulo = (a, b, c) => {
    if (a === b && a === c) {
        return 'Triângulo equilátero';
    }
    else if (a === b || a === c || b === c) {
        return 'Triângulo isósceles';
    }
    else {
        return 'Triângulo escaleno';
    }
}

console.log(defineTriangulo(5, 5, 5));
console.log(defineTriangulo(5, 5, 10));
console.log(defineTriangulo(5, 6, 12));
