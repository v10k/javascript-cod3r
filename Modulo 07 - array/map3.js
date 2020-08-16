Array.prototype.map2 = function(callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this));
    }
    return array;
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const converteJSON = e => JSON.parse(e);

let resultado = carrinho.map2(converteJSON).map2(e => {
    return e.preco;
})

console.log(resultado);