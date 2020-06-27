const numerosExtensos = n => {
    switch(n) {
        case 0:
            return 'Zero';
        case 1:
            return 'Um';
        case 2:
            return 'Dois';
        case 3:
            return 'Três';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9:
            return 'Nove';
        case 10:
            return 'Dez';
        default:
            return 'Número fora de intervalo';
    }
}

console.log(numerosExtensos(0));
console.log(numerosExtensos(1));
console.log(numerosExtensos(2));
console.log(numerosExtensos(3));
console.log(numerosExtensos(4));
console.log(numerosExtensos(5));
console.log(numerosExtensos(6));
console.log(numerosExtensos(7));
console.log(numerosExtensos(8));
console.log(numerosExtensos(9));
console.log(numerosExtensos(10));
console.log(numerosExtensos(11));