const Crianca = (altura, taxaCrescimento) => {
    return {
        altura,
        taxaCrescimento
    }
};

const calculaTempo = (crianca1, crianca2) => {
    let count = 0;
    let altura1 = crianca1.altura;
    let altura2 = crianca2.altura;
    while (altura2 < altura1) {
        altura1 += crianca1.taxaCrescimento;
        altura2 += crianca2.taxaCrescimento;
        count++;
    }
    return count;
}


const calculaAltura = (crianca1, crianca2) => {
   if (crianca1.altura === crianca2.altura) {
       crianca1.taxaCrescimento === crianca2.taxaCrescimento 
       ? 'Crianças tem a mesma altura e taxa de crescimento' 
       : (crianca1.taxaCrescimento > crianca2.taxaCrescimento) 
       ? 'Criança 1 irá passar a criança 2 em 1 ano' 
       : 'Criança 2 irá passar a criança 1 em 1 ano';
   }
   else {
       if (crianca1.altura > crianca2.altura && crianca2.taxaCrescimento > crianca1.taxaCrescimento) {
            const tempo = calculaTempo(crianca1, crianca2);
            return `A criança 2 irá passar a criança 1 em ${tempo} anos`;
       }
       else if(crianca2.altura > crianca1.altura && crianca1.taxaCrescimento > crianca2.taxaCrescimento) {
            const tempo = calculaTempo(crianca2, crianca1);
            return `A criança 1 irá passar a criança 2 em ${tempo} anos`;
       }
       else {
           return (crianca1.altura > crianca2.altura) ? 'A criança 2 nunca irá passar a criança 1 em altura' : 'A criança 1 nunca irá passar a criança 2 em altura';
       }
   }       
}


const crianca1 = Crianca(150, 2);
const crianca2 = Crianca(130, 4);

console.log(calculaAltura(crianca1, crianca2));
console.log(crianca2.altura);