const jurosSimples = (capitalInicial, taxaJuros, temploAplicado) => {
    const juros = capitalInicial * taxaJuros * temploAplicado;
    return capitalInicial + juros;
}

const jurosCompostos = (capitalInicial, taxaJuros, temploAplicado) => {
    return capitalInicial * Math.pow(taxaJuros + 1, temploAplicado);
    // return capitalInicial * (taxaJuros + 1) ** temploAplicado;
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));