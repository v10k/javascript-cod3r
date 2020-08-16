const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = pessoa => pessoa.pais      === 'China';
const mulheres = pessoa => pessoa.genero    === 'F';

const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}


axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario));
});