const contemEmString = (s1, s2) => {
    let retorno = (s1.length > 0) ? true : false;
    for (let i = 0; i < s1.length; i++) {
        if (!s2.includes(s1[i])) {
            retorno = false;
            break;
        }
    }
    return retorno;
}

console.log(contemEmString('teste', 'etset'));
console.log(contemEmString('abc','cba'));
