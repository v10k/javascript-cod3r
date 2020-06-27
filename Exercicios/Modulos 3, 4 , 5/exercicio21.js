const convenio = idade => {
    let total = 100;
    switch(true) {
        case idade < 10:
            return total += 80;
        case idade >= 10 && idade <= 30:
            return total += 50;
        case idade > 30 && idade <= 60:
            return total += 95;
        case idade > 60:
            return total += 130;
        default:
            return 'Idade inválida';
    }
}

console.log(convenio(7));
console.log(convenio(30));
console.log(convenio(60));
console.log(convenio(61));