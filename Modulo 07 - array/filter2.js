Array.prototype.filter2 = function(callback, thisArgu = this) {
    const novoArray = [];
    for (let i = 0; i < thisArgu.length; i++) {
        if (callback(thisArgu[i], i, thisArgu)) {   
            novoArray.push(thisArgu[i]);
        }
    }
    return novoArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
];

const maiorPreco = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

const produtosFiltrados = produtos.filter2(maiorPreco, produtos).filter2(fragil);
console.log(produtosFiltrados);