const prompt = require("prompt-sync")();
function calcIMC(height, weight){
   
     return `Seu IMC é: ${(weight/height**2).toFixed(2)}`
}
console.log('Digite abaixo seus dados.');
let height = (prompt('Altura: '));
let weight = (prompt('Peso: '));
console.log(calcIMC(height,weight))