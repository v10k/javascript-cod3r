function planoDeTrabalho(plano, salario) {
    switch(plano.toUpperCase()) {
        case 'A':
            console.log(`novo salário: ${salario += salario * 0.10}`);
            break;
        case 'B':
            console.log(`novo salário: ${salario += salario * 0.15}`);
            break;
        case 'C':
            console.log(`novo salário: ${salario += salario * 0.20}`);
            break;
        default:
            console.log('plano inválido');
    }
}

planoDeTrabalho('a', 5000);
planoDeTrabalho('B', 1000);
planoDeTrabalho('c', 2000);
planoDeTrabalho('d', 2000);