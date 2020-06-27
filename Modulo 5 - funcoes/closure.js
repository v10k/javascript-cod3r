// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro () {
        return x;
    }
    return dentro();
}

const minhaFuncao = fora(); // função dentro de função
// const minhaFuncao = fora()(); // poderia ser assim se não a função não retornasse dentro()
console.log(minhaFuncao);