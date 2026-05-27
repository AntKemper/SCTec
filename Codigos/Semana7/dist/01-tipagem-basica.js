"use strict";
//PASSO 1: TIPAGEM BASICA
Object.defineProperty(exports, "__esModule", { value: true });
//1.1 ANOTAÇÃO EXPLICITA VS INFERENCIA
//Anotação explicita: informa o tipo manualmente
let nomeCurso = 'migrando';
let totalAlunos = 50;
let aulaAtiva = true;
//inferencia: typescript descobre o tipo de variavel
let instrutor = 'Antonio'; //string
let duracao = 3; // number
let gravacao = false; //boolena
console.log(nomeCurso, totalAlunos, aulaAtiva);
console.log(instrutor, duracao, gravacao);
//1.2 Erro de tipo
let idade = 25;
//idade = 'vinte'
//Type 'string' is not assignable to type 'number'.
idade = 1600;
console.log('idade', idade);
//1.3 TIPAGEM EM FUNÇÕES
//não concatena como no javaScript("10"+5)-> 105
function somar(a, b) {
    return a + b;
}
const resultado = somar(10, 5);
console.log("10 + 5 =", resultado);
//1.4 Patemetros opcionais e valores default
//O ? torna o parametro opcional
function saudar(nome, cargo) {
    if (cargo) {
        return `ola, ${nome} (${cargo})!`;
    }
    return `Ola, ${nome}!`;
}
//Valor defaut: define padrão pré estabelecido.
function calculoDesconto(preco, desconto = 10) {
    return preco - (preco * desconto) / 100;
}
console.log(saudar("Ana"));
console.log(saudar("Carlos", "tech Lead"));
console.log("Preço com desconto padrão:", calculoDesconto(200));
console.log("Preço com desconto 20%:", calculoDesconto(200, 20));
//1.5 Retorno com void e never
//void funcção não retorna nada
function registrarLog(mensagem) {
    console.log(`[LOG] ${new Date().toISOString()} - ${mensagem}`);
}
//never: função que NUNCA termina normalmente (lança erro ou looping)
function lnacarErro(mensagem) {
    throw new Error(mensagem);
}
registrarLog("aula iniciada");
lnacarErro('deu erro');
//# sourceMappingURL=01-tipagem-basica.js.map