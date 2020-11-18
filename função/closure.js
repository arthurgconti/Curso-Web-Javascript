/**
 * Closure é o escopo é o escopo criado quando uma função é declarada
 * Esse escopo permite a função acessar e manipular variáveis externas a função
 */

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhasFuncao = fora()
console.log(minhasFuncao())