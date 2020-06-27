const anoBissexto = ano => {
    if (ano <= 0) {
        console.log(`${ano} Não é ano bissexto`);
        return false;
    }
    else if (ano % 400 == 0) {
        console.log(`${ano} É ano bissexto`);
        return true;
    }
    else if (ano % 100 == 0) {
        console.log(`${ano} Não é ano bissexto`);
        return false;
    } 
    else if (ano % 4 == 0) {
        console.log(`${ano} É ano bissexto`);
        return true;
    }
    else {
        console.log(`${ano} Não é ano bissexto`);
        return false;
    }
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))