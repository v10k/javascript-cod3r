const situacaoAluno = nota => {
    if (nota < 38) {
        return `Reprovado com a nota: ${nota}`;
    }

    nota = (nota % 5 >= 3) ? Math.ceil(nota / 5) * 5 : nota;
    return (nota >= 40) ? `Aprovado com a nota: ${nota}` : `Reprovado com a nota: ${nota}`;
}

console.log(situacaoAluno(84));
console.log(situacaoAluno(38));
console.log(situacaoAluno(37));
