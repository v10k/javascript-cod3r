const diaUtil = dia => {
    switch(dia) {
        case 1:
        case 7:
            return 'Fim de Semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia Útil'
        default:
            return 'Não é um dia válido'
    }
}

console.log(diaUtil(1));
console.log(diaUtil(2));
console.log(diaUtil(3));
console.log(diaUtil(4));
console.log(diaUtil(5));
console.log(diaUtil(6));
console.log(diaUtil(7));
console.log(diaUtil(8));