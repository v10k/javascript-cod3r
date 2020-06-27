const retornaCalculoPreciso = n => {
    return `R$ ${n.toFixed(2).toString().replace('.', ',')}`;
};

console.log(retornaCalculoPreciso(3.201241));
console.log(retornaCalculoPreciso(0.30000000000000004));