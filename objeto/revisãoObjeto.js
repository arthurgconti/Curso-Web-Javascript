//Coleção dinâmica de pares chaves/valor
const produto= new Object
produto.nome = "Caderno"
produto['marca de produto'] = "genérica"
produto.preco = 240

console.log(produto)
delete produto.preco
delete produto['marca de produto']
console.log(produto)

const Carro ={
    modelo:'ferrari',
    valor:90000,
    proprietario:{
        nome: 'Rubens',
        endereco: 'Rua dos Brabo',
        numero: '1234'
    },
    condutores:[{
        nome:'Rubens',
        cpf:'xxx.xxx.xxx-xx'
    },{
        nome:'Rosane',
        cpf:'yyy.yyy.yyy-yy'
    }],
    calcularValorSeguro(){
        //...
    }
}

Carro.proprietario.nome="Rosane"
Carro['proprietario']['endereco'] = 'RJ'
delete Carro.condutores
delete Carro.calcularValorSeguro

console.log(Carro)