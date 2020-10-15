//novo ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 2500
    }
}

const {nome,idade} = pessoa

console.log(nome,idade)

const {nome:n, idade:i} = pessoa

console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

const {endereco} = pessoa
console.log(endereco)


//Toma cuidado com desestruturação de dados aninhados, não tente acessar atributos que não existem de forma aninhada
const {conta:{ag, num}} = pessoa
console.log(ag,num)