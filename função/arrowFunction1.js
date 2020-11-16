/*Função mais prática, várias formas de se utilizar e this constante*/

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//retorno implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = () => "Olá"
//ignorar parâmetro
ola = _ => "Oie"

console.log(ola())