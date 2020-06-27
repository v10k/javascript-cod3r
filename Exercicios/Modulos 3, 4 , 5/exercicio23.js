function calculaNota(codigo, n1, n2, n3) {
   let notas = [n1, n2, n3];
    // notas.sort((a, b) => b - a);
    notas.sort((a,b) => a < b ? 1 : -1);
    let resultado = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10;
    console.log(`Aluno de código ${codigo}. Notas: ${notas[0] + ', ' + notas[1] + ', ' + notas[2]}. Média: ${resultado}. Situação: ${(resultado >= 5) ? 'Aprovado' : 'Reprovado'}`);
}

calculaNota(1000, 8, 7, 10);