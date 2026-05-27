class Pedido{
    constructor(id, cliente){
        this.id = id
        this.cliente = cliente
        this.itens = []
        this.status = 'pendent'
    }

    adicionarItem(nome, preco, quantidade){
        this.itens.push({nome, preco, quantidade})
    }

    calcularTotal(){
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade)
        }, 0)
    }

    atualizarStatus(novoStatus){
        const statusValidos = ['pendente', 'em processamento', 'enviado', 'entregue', 'cancelado']

        if(statusValidos.includes(novoStatus)){
            this.status = novoStatus
        }else{
            throw new Error('Status Inválido!') 
        }
    }

    resumoPedido(){
        const total = this.calcularTotal().toFixed(2)
        console.log(`Pedido #${this.id} - Cliente ${this.cliente}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total: R$ ${total}`)
    }

}
try{
    const pedido01 = new Pedido(1, 'antonio')

    pedido01.adicionarItem('cachorro-quente', 12.89, 2)    
    pedido01.adicionarItem('Coca-cola', 4.5, 2)    
    pedido01.adicionarItem('cocada', 7, 1)    


    pedido01.atualizarStatus('em processamento')  
    pedido01.resumoPedido()

    pedido01.atualizarStatus('Enviado')
    pedido01.resumoPedido()

    pedido01.atualizarStatus('Entregue')
    pedido01.resumoPedido()
}catch(erro){
    console.log(erro.message)
}


