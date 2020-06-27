function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Iphone', 4000.00));
console.log(criarProduto('Tv Samsung', 3000.00));