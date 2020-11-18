//Factory é simples

function CriarPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
    }
}

console.log(CriarPessoa('Ana','Silva'))
console.log(CriarPessoa('Roberto','Carlos'))