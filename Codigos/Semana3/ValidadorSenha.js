function validarSenha(senha){
    if(typeof senha !== 'string'){
        return {
            ok: false,
            msg:'Senha deve ser uma string'
        }
    }

    const minLen = senha.length >= 8
    const maxLen = senha.length <= 64
    const temMaius = /[A-Z]/.test(senha)
    const temMins = /[a-z]/.test(senha)
    const temNum = /[0-9]/.test(senha)
    const temEsp = /[!@*%$]/.test(senha)
    const temSpace = !/\s/.test(senha)

    const ok = minLen && maxLen && temMaius && temMins && temNum && temEsp && temSpace

    return {
        ok: ok,
        msg: ok ? 'Senha Forte' : 'Senha Fraca',
    }

}

console.log(validarSenha(null))
console.log(validarSenha('Antonio'))
console.log(validarSenha('Antonio123'))
console.log(validarSenha('Antonio@'))
console.log(validarSenha('Antonio1223@*'))
