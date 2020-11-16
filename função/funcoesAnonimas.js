const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(1,3)
imprimirResultado(15,5,soma)
imprimirResultado(15,5,function(x,y){
    return x*y
})

imprimirResultado(15,5, (x,y)=>x-y)

const Pessoa ={
    falar: function(){
        console.log("Salve")
    },
    //alternativa
    falar2(){
        console.log("Salve2");
    }
}

Pessoa.falar()
Pessoa.falar2()