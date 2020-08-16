const escola = "Cod3r";

console.log(escola.charAt(4)); //letra no indice 4
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(3)); //Retorna o unicode referente a um char
console.log(escola.indexOf('3')); //Retorna posição de um char ou string

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); //Corte de string, indice 0 até o 2

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e')); 

console.log('Ana, Maria, Pedro'.split(', '));