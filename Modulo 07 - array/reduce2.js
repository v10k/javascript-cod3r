const alunos = [
    { nome: 'João'  , nota: 7.3 , bolsista: false },
    { nome: 'Maria' , nota: 9.2 , bolsista: true },
    { nome: 'Pedro' , nota: 9.8 , bolsista: false },
    { nome: 'Ana'   , nota: 8.7 , bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?
const desafio1 = alunos.map(e => e.bolsista).reduce((a, b) => {
    return (!a || !b) ? false : true;
});
console.log(desafio1);

// Algum aluno é bolsista?
const desafio2 = alunos.map(e => e.bolsista).reduce((a, b) => {
    return (a || b) ? true : false;
});
console.log(desafio2);