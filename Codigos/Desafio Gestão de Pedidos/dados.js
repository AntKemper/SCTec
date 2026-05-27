//https://davisaldanha.github.io/api-gestao-pedidos/

const pedidos = [
  {
    id: 1,
    clienteId: "C001",
    status: "aprovado",
    itens: [
      { produto: "Teclado Mecânico", preco: 250.00, qtd: 2 },
      { produto: "Mouse Gamer",      preco: 89.90,  qtd: 1 }
    ]
  },
  {
    id: 2,
    clienteId: "C002",
    status: "pendente",
    itens: [
      { produto: "Monitor 27\"", preco: 1200.00, qtd: 1 }
    ]
  },
  {
    id: 3,
    clienteId: "C001",
    status: "cancelado",
    itens: [
      { produto: "Headset Pro", preco: 350.00, qtd: 1 }
    ]
  },
  {
    id: 4,
    clienteId: "C003",
    status: "aprovado",
    itens: [
      { produto: "Webcam 1080p", preco: 199.90, qtd: 1 },
      { produto: "Hub USB-C",    preco: 75.00,  qtd: 3 }
    ]
  }
];

// ── Objeto de clientes (chave: ID, valor: dados do cliente) ──────────
const clientes = {
  "C001": { nome: "Ana Lima",    email: "ana@email.com",    vip: true  },
  "C002": { nome: "Bruno Melo",  email: "b.melo@email.com", vip: false },
  "C003": { nome: "Carla Neves", email: "cneves@email.com", vip: true  }
};

module.exports = pedidos, clientes;