//Par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'fala' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome : 'Pedro',
    idade: 32,
    peso: 2.90,
    endereco:{
        logradouro:'Rua topzera',
        numero: 1234
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

