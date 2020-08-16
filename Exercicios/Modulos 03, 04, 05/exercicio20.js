const otimizaTroco = valor => {
    const cedulas = [0, 0, 0, 0, 0]; // 100, 50, 10, 5, 1
    while (valor > 0) {
        if (valor >= 100) {
            cedulas[0]++;
            valor -= 100;
        }
        else if (valor >= 50) {
            cedulas[1]++;
            valor -= 50;
        }
        else if (valor >= 10) {
            cedulas[2]++;
            valor -= 10;
        }
        else if (valor >= 5) {
            cedulas[3]++;
            valor -= 5;
        }
        else if (valor >= 1) {
            cedulas[4]++;
            valor -= 1;
        }
    }
    imprimeTela(cedulas);
}

const cedulaString = n1 => {
    switch(n1) {
        case 0:
            return 'R$ 100.';
        case 1:
            return 'R$ 50.';
        case 2:
            return 'R$ 10.';
        case 3:
            return 'R$ 5.';
        case 4:
            return 'R$ 1.';             
        default:
            return 'Erro ! valor inválido';
    }
}

const imprimeTela = cedulas => {
    let string = '';
    cedulas.forEach((valor, indice) => {
        if (valor > 0) {
            const nota = cedulaString(indice);
            string += `${valor} nota(s) de ${nota} `;
        }
    });
    console.log(string);
}

otimizaTroco(18);
otimizaTroco(153);





