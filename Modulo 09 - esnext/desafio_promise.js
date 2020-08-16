const fs = require('fs');
const path = require('path');

const lerArquivo = (caminho) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            try {
                const config = conteudo.toString();
                resolve(config);
            } catch (e) {
                reject(e.message);
            }
        });
})
};

const caminho = path.join(__dirname, '/arquivo.txt');

lerArquivo(caminho).then(conteudo => conteudo.split('\n')).then(linhas => console.log(linhas.join(','))).then(conteudo => `O conteudo final é: ${conteudo}`).then(console.log).catch(console.log);