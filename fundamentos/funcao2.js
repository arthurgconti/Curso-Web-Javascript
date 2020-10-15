//Armazenando função em variável

const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando Arrow Function em variáveis

const soma = (a,b) =>{
    return a + b
}

console.log(soma(2,3))

//Retorno implícito
const subtrair = (a,b) => a - b 

console.log(subtrair(5,4))

const imprimir2 = a => console.log(a)

imprimir2("mano??")