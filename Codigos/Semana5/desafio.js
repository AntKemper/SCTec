const pedidos = require("./Pedidos ")

const cadastro = {
    Nome: "Antonio",
    Idade: 46,
    Cidade: "Chapecó",
    Cep: '89.803-250',
    Filhos: 2,
    EstadoCivil: "Casado",
}

cadastro.telefone = '6699884'
delete cadastro.Idade

for (const [chave, valor] of Object.entries(cadastro) )

    console.log(`${chave}: ${valor}`)

console.log(cadastro.Nome)
console.log([cadastro.Nome])
console.log(cadastro.telefone)
console.log(cadastro)
console.log(Object.keys(cadastro))


