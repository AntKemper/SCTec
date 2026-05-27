//super classe
class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    apresentar(){
        return `Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome, idade)
        this.matricula = matricula
    }

    mostrarMatricula(){
        return `Minha matricula é ${this.matricula}`
    }
}

//Criando stancia de aluno

const aluno1 = new Aluno("Ana", 20, "666")
console.log(aluno1.apresentar())
console.log(aluno1.mostrarMatricula())