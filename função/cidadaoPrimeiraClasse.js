//Criando função de forma Literal

//Return e parâmetros são opcionais 
function fun1() { }

//Armazenar em variável

const fun2 = function () { }


//Armazenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

//Armazenar em atributo de objeto
const obj = {}
obj.falar = function () { }
console.log(obj.falar())

//Passar função como param
function run(fun){
    fun()
}
run(function(){console.log('executando....')})




//uma função pode retornar/conter uma função

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(3)
const cincoMais = soma(2,3)
cincoMais(4)