const trocaVetores = (vetor1, vetor2) => {
    
    if (vetor1.length !== vetor2.length) {
        console.log('vetores com tamanhos diferentes');
        return;
    }

    let n = vetor1.length;
    for (let i = 0; i < n; i++) {
        vetor1.push(vetor2[i]);
        vetor2.push(vetor1[i]);
    }
    n = (vetor1.length / 2);
    for (let i = 0; i < n ; i++) {
        vetor1.shift();
        vetor2.shift();
    }
    console.log('Vetor 1: ' + vetor1);
    console.log('Vetor 2: ' + vetor2);
}

// const v1 = [1, 2, 3, 4, 5, 6];
const v1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const v2 = [6, 7, 8, 9, 10, 11];

trocaVetores(v1, v2);