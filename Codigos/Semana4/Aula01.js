// Funções Declarativas
function executarProjeto(parametro){
    console.log(`Executando projeto... ${parametro}`)
}

executarProjeto('SysRH')

// Funções de Expressão
const iniciarPipeline = function(servidor, porta){
    console.log(`Executando Pipeline no servidor ${servidor} na porta ${porta}...`)
}

iniciarPipeline('127.0.0.1', '6077')

// Arrow Function
const executarApache = (ip, porta = 8080) => {
    if(ip && porta){
        console.log(`Servidor up... IP: ${ip} : PORTA: ${porta}`)
        return
    }

    console.log('IP e porta não identificados...')
}

const executarMySql = () => console.log('Executando servidor...')

executarApache('200.304.987.21', 80)
executarMySql()


/* ---------------------------------------------------------------------- */

function somar(...nums){
    soma = 0
    for(let i = 0; i < nums.length; i++){
        soma += nums[i]
    }
    return soma
}

console.log(somar(1, 2, 3, 4))

/* ---------------------------------------------------------------------- */
// Rest Parameters e Spread
const x = [10, 20, 30]

const y = []

for(let i = 0; i < x.length; i++){
       y.push(x[i])
    }

console.log('Array Y: ', y)

const w = [...x]

console.log('Array W: ', w)


/* ---------------------------------------------------------------------- */
//Hoisting

console.log(fun(2, 3)) //ReferenceError

const fun = (a, b) => a ** b

console.log(potencia(10, 2)) //Executa sem erro

function potencia(a, b) {
    return a ** b
}
