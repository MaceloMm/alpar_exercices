/* 
Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara,
usando as variáveis a, b e c, e mostre os valores x1 e x2. Usando os operadores de
atribuição e aritméticos
*/

let a = 1;
let b = -5;
let c = 6;

dis = (b ** 2) - 4 * a * c

let x1 = (-b + Math.sqrt(dis)) / (2 * a);
let x2 = (-b - Math.sqrt(dis)) / (2 * a);

console.log(x1, x2)