

//Parte 1 — Manipulação de Arrays e Objetos

const pedidos = require("./Pedidos ")

// Desafio 1 — Listar nomes dos clientes

function listarClientes(pedidos){
return pedidos.map(pedido => pedido.cliente)    
}


//Desafio 2 — Buscar pedido por ID

function buscarPedidosPorId(pedidos, id) {
    return pedidos.find(pedido => pedido.id === id)
}

//Desafio 3 — Filtrar pedidos entregues


function pedidosEntregues(pedidos){
    return pedidos.filter(pedido => pedido.status == 'entregue')
}

//Desafio 4 — Verificar status geral dos pedidos

function verificarStatusPedido(status) {
    return pedidos.every(pedido => pedido.status == 'entregue')
}

//Desafio 5 — Calcular total de cada pedido

function valorTotalPorPedido(pedido){
    return pedido.itens.reduce((total, intem) => {
        return total + (intem.quantidade * intem.preco)
    }, 0)
}

function totalPorPedido(pedido){
    return pedidos.map(pedido => ({
        cliente: pedido.cliente, 
        total: valorTotalPorPedido(pedido)
    }))
}

//Desafio 6 — Calcular faturamento total
//NÃO CONSEGUI, MESMO FAZENDO IGUAL O DO PROFESSOR
function faturamentoTotal(pedido){
    return pedido.reduce((total, soma) => {
        return total + (soma.quantidade * soma.preco)
    }, 0)
}

//Desafio 7 — Converter objeto para JSON

function converterJson(pedidos){
    return JSON.stringify(pedidos, null, 2)
}

//Desafio 8 — Converter JSON novamente para objeto

function converteParaObjeto(json){
    return JSON.parse(converterJson(pedidos))
}

//Desafio 9 — Criar callbacks personalizados

function processarPedidos(pedidos, callback) {
  return callback(pedidos)
}
  

function listarClientesCallback(pedidos){
    return listarClientes(pedidos)
}
function calcularFaturamentoCallback(pedidos){
    return faturamentoTotal (pedidos)
}

function filtrarPedidosCallback(pedidos){
    return processarPedidos(pedidos,
        () => pedidos.filter(pedido => pedido.status === "pendente")
    )
}

//Qual produto foi mais vendido?

function produtoMaisVendido(pedidos) {

const vendas = {}

pedidos.forEach(pedidos => {
    pedido.itens.forEach(item => {
        vendas[item.produto] = (vendas[item.produto] || 0) + intem.quantidade
    })

    //Enontrar o nome do produto mais vendido

    const produto = Object.keys(vendas).reduce((maisVendido, produtoAtual) => {
        return vendas[produtoAtual] > vendas[maisVendido] ? 
        produtoAtual : maisVendido
    })

    return {
        produto,
        quantidade: vendas[produto]
    }

}}




console.log(listarClientes(pedidos))
console.log(buscarPedidosPorId(pedidos, 3))
console.log(pedidosEntregues(pedidos))
console.log(verificarStatusPedido(pedidos))
console.log(totalPorPedido(pedidos))
console.log(converterJson(pedidos))
console.log(converteParaObjeto(pedidos))
console.log(listarClientesCallback(pedidos))
console.log(calcularFaturamentoCallback(pedidos))
console.log(filtrarPedidosCallback(pedidos))
console.log(produtoMaisVendido(pedidos))
console.log(vendas)