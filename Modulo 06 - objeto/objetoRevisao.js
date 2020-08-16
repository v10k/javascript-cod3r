// Coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] =  'Genérica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcaularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av gigante';
console.log(carro);

// delete carro.condutores;
// delete carro.proprietario.endereco;
delete carro.calcaularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);

const {endereco} = carro.proprietario;
console.log(endereco);