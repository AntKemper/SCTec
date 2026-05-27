function calcImc(peso, altura){
    let isPesoValid = peso > 0 && peso <= 300
    let isAlturaValid = altura > 0 && altura <=3

    if (!(isPesoValid && isAlturaValid)){
        return{
            return: null, 
            message: "valores invalidos!"
        }
    }

    const imc = (peso/ (altura**2)).toFixed(2)
    let msg = ""

    if(imc >= 40){
        msg = 'Obesidade Grau III'
    }else if(imc >= 35){
        msg = 'Obesidade Grau II'
    }else if(imc >= 30){
        msg = 'Obesidade Grau II'
    }else if(imc >= 25){
        msg = 'Obesidade Grau I'
    }else if(imc >= 20){
        msg = 'Sobrepeso'
    }else if(imc >= 18.5){
        msg = 'Peso NORMAL'
    }else{
        msg = 'Abaixo do Peso'
        
    }

    return{
    result: imc,
    message: msg,
    }

}


console.log(calcImc(75,2))
console.log(calcImc(82,1.8))
console.log(calcImc(80,1.77))
console.log(calcImc(75,1.78))

