/*

let a = 1;
let b = -5;
let c = 6;

dis = (b ** 2) - 4 * a * c

let x1 = (-b + Math.sqrt(dis)) / (2 * a);
let x2 = (-b - Math.sqrt(dis)) / (2 * a);

console.log(x1, x2)

Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:
a) A variável “a” é válida (não pode ser zero);
b) Se não existem raízes reais, e informar;
c) Se existe apenas uma raiz real, e informar essa raiz;
d) Se existem duas raízes reais, e as informar
*/

let a = 1 ? a === 0 : console.log('A variável "a" não pode ser zero');
let b = -5;
let c = 6;

dis = (b ** 2) - 4 * a * c

if (dis < 0) {
    console.log('Não existem raízes reais');
    return;
}else if (dis === 0) {
    let x = -b / (2 * a);
    console.log('Existe apenas uma raiz real:', x);
    return;
}else{
    let x1 = (-b + Math.sqrt(dis)) / (2 * a);
    let x2 = (-b - Math.sqrt(dis)) / (2 * a);
    console.log('Existem duas raízes reais:', x1, x2);
}