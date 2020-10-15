//função sem retorno
function imprimirSoma(a ,b ){
    console.log(a+b)

}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,4,5,6)
imprimirSoma()


//função com retorno
//b=1 setando b = 1 quando não for passado os dois parametros
function soma (a,b = 1){
    return a+b
}
console.log("função com retorno")
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())