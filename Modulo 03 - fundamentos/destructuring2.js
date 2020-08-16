const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

const array = [1, 2, 3, 4, 5, 6];
const [p1, p2, p3] = array;
console.log(p1, p2, p3);

const array2 = [1, 2, [10, 11, 12]];
const [, , [, , L]] = array2;
console.log(L);