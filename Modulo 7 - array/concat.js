const filhas = ['Valeskah', 'Cibalena'];
const filhos = ['Waxiton', 'Uesclei'];
// const todos = filhas.concat(filhos, 'Fulano');
const todos = [...filhos, ...filhas, 'fulano'];

console.log(todos, filhas, filhos);

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));