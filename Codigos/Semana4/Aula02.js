const alunos = ['John', 'Ana', 'Steve']
const _alunosCopia = alunos //Não é feito uma cópia

console.log(alunos)
console.log(_alunosCopia)

const alunosCopia = alunos.slice()
// const alunosCopia = [...alunos]

_alunosCopia.push('José')

console.log(alunos)
console.log(_alunosCopia)
console.log(alunosCopia)

//Exemplificação do algoritmo literal para função findIndex
function findIndex(value){
    if(value > 2){
        return true
    }
}

const arr = [1, 5, 3]

for(let i = 0; i < arr.length; i++){
    if (findIndex(arr[i])){
        console.log(i)
        break
    }
}

//Exemplificação do algoritmo literal para função every
const arr = [1, 5, 3]

function validCondition(value){
    if (value > 0){
        return true
    }
}

for(let i = 0; i < arr.length; i++){
    if (validCondition(arr[i])){
        if(i === arr.length - 1){
            console.log(true)
            break
        }
       continue 
    }

    console.log(false)
    break
}