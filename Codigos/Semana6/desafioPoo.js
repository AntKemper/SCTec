class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome
        this._salarioBase = salarioBase

    }

    calcularSalario(){
        throw Error('"calcularsalario()" deve ser implementado pela subclasse')
    }

    descrever(){
        return `Fundionario: ${this.nome}`
    }


class FuncionarioClt extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
        this.valeRefeicao = 600
    }

    calcularSalario(){
        const inss = this._salarioBase * 0.11
        const irrf = this._salarioBase * 0,15
        return this._salarioBase - iss - irrf + this.valeRefeicao
    }

    descrever(){
        const liquido = this.calcularSalario().toLocaleString('pt-BR', {
            style:'currency',
            currency: 'BRL'
        })

        return `CLT  | ${this.nome}  | ${liquido}`
    }
}