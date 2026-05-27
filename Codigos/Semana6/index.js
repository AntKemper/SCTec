const codigosEntrega = ["BR123", "BR456", "BR789", "BR000"];

function consultarEntrega(codigo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(codigo){
                case "BR123":
                    resolve('em separação')
                    break
                case "BR456":
                    resolve('em transporte')
                    break
                case "BR789":
                    resolve('entregue')
                    break
                default:
                 reject(new Error(`Codigo invalido: ${codigo}`))
                
            }
        
        }, 2000)
    })
}


async function monitorarEntregas(){
    for(const codigo of codigosEntrega){
        try{
            const status = await consultarEntrega(codigo)
            console.log(`codigo: ${codigo}`)
            console.log(`Status: ${status}`)
            console.log(`#___________________#`)
        }catch(erro){
            console.log(`Codigo: ${codigo}`)
            console.log(`erro: ${erro.message}`)
            console.log(`#___________________#`)
        }
    }
            console.log("Monitoramento concluido")
        
    }
monitorarEntregas()