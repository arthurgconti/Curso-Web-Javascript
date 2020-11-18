function getPreco(imposto = 0,moeda='R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+ imposto)}`
}

const produto = {
    nome: 'iPear',
    preco: 15000,
    desc: 0.15,
    getPreco
}
global.preco = 0
global.desc = 0

console.log(getPreco())
console.log(produto.getPreco())

//Call & Apply

const carro = {preco: 50200, desc:0.05}
console.log('\nusando call')
console.log(getPreco.call(carro))

console.log('\nusando apply')
console.log(getPreco.apply(carro))

//Passa os parametros direto na linha, depois do contexto que é o objeto carro nesse caso
console.log(getPreco.call(carro,0.15,'$'))
//Passa os parametros via array, depois do contexto que é o objeto carro nesse caso
console.log(getPreco.apply(carro,[0.20,'C$']))