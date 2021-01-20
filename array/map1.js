const numeros = [1, 2, 3, 4, 5, 6, 7]

const dobro = numeros.map(e => e * 2)

console.log(dobro);

const soma10 = e => e + 10
const triplo = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = numeros.map(soma10).map(triplo).map(toMoney)

console.log(resultado)