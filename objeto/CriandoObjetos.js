//anotação Literal
const obj1 = {}
console.log(obj1);

//Object JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//Funções construturoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const prod1 = new Produto('Caneta', 1.99, 0.02)
const prod2 = new Produto('Cadeira', 20.99, 0.15)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario('rogerio', 1500, 0)
const func2 = criarFuncionario('roberto', 2500, 2)
console.log(func1.getSalario(), func2.getSalario());

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//Função famoso Json Object
const fromJSON = JSON.parse('{"info":"OiOi"}')
console.log(fromJSON.info);