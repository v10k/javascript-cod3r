const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

let p = new Promise(function(resolve) {
    // resolve({
    //     x: 3,
    //     y: 4
    // });
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
}).then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);

