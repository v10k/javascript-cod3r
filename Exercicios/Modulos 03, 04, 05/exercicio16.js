const calculadora = (num1, operador, num2) => {
    switch(operador) {
        case '+':
            return `Resultado = ${num1 + num2}`;
        case '-':
            return `Resultado = ${num1 - num2}`;
        case '*':
            return `Resultado = ${num1 * num2}`;
        case '/':
            return `Resultado = ${num1 / num2}`;
        default:
            return 'Operação inválida';
    }
}

console.log(calculadora(3, '+', 5));
console.log(calculadora(10, '-', 8));
console.log(calculadora(2, '*', 7));
console.log(calculadora(20, '/', 4));
console.log(calculadora(8, '%', 4));
