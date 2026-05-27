const pedidos = require("./dados")


//Missão 01 Filtrar pedidos aprovados

function filtrarPedidosAprovados(pedidos){
    return pedidos.filter(pedido => pedido.status == 'cancelado')
} 

//Desafio 02 Calcular total de cada pedido

function calcularTotais(pedidos){
    return pedidos.itens.produto.reduce((total, item) => {
        return total + (item.quantidade * item.preco)
    }, 0)
}



    console.log(filtrarPedidosAprovados(pedidos))
    console.log(calcularTotais(pedidos))