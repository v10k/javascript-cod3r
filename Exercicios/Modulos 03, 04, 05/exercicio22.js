const jurosCompostos = (capitalInicial, temploAplicado, taxaJuros = 0.05) => capitalInicial * Math.pow(taxaJuros + 1, temploAplicado);

const anuidadeAssoc = (mes, valor) => (mes < 1 && mes > 12) ? 'Mês inválido' : jurosCompostos(valor, mes - 1).toFixed(2);


console.log(anuidadeAssoc(1, 200));
console.log(anuidadeAssoc(2, 200));
console.log(anuidadeAssoc(4, 100));

