const cardapio = (codigo, quantidade = 1) => {
    switch(parseInt(codigo)) {
        case 100:
            return `${quantidade}x Cachorro(s) quente - total: ${quantidade * 3}`;
        case 200:
            return `${quantidade}x Hamburguer(s) simples(s) - total: ${quantidade * 4}`;
        case 300:
            return `${quantidade}x Cheeseburguer(s) - total: ${quantidade * 5.5}`;
        case 400:
            return `${quantidade}x Bauru(s) - total: ${quantidade * 7.5}`;
        case 500:
            return `${quantidade}x Refrigerante(s) - total: ${quantidade * 3.5}`;
        case 600:
            return `${quantidade}x Suco(s) - total: ${quantidade * 2.8}`;
        default:
            return 'Produto não existe';
    }
}

console.log(cardapio('100', 2));
console.log(cardapio(200, 1));
console.log(cardapio(300, 6));
console.log(cardapio(400, 5));
console.log(cardapio(500, 3));
console.log(cardapio(600));
console.log(cardapio(700));
