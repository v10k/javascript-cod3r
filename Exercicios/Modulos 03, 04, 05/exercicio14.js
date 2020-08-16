const frutasVendidas = fruta => {
    switch(fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('Erro ! Essa fruta não existe');
    }
}
frutasVendidas('maçã');
frutasVendidas('kiwi');
frutasVendidas('melancia');
frutasVendidas('abacate');
