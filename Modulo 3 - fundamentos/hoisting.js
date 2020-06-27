console.log('a =', a);
var a = 2;
console.log('a = ', a);

console.log('b =', b);
let b = 2; // hoisting não funciona com let
console.log('b =', b);


/* 
* hoisting é a alocação da variável tipo var e funções na memória durante a fase de 
* compilação do código. 
* Só funciona  se a variável for inicializada.
*/