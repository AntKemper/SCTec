const prompt = require("prompt-sync")()

let senha = prompt('insira sua senha: ')

while (senha.length < 8){
    console.log('insira a senha com 8 caracteres:')

    senha = prompt('insira a sua senha aqui:')
}


console.log('senha ok')