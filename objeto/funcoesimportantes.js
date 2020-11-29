const pessoa = {
    nome: 'Rebeca',
    idade: 18,
    altura: 1.58
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa,'Ano',{
    enumerable:false,
    writable:false,
    value:'2020'
})
pessoa.Ano = '2019'
console.log(pessoa.Ano)
console.log(Object.keys(pessoa));

//Object.assign ECMA2015

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}

const obj = Object.assign(dest,o1,o2)
console.log(obj)
