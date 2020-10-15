let valor; //não inicializada
console.log(valor)
//console.log(valor2) is not defined, pq não foi né

valor = null //null = ausencia de valor
console.log(valor)

//console.log(valor.toString())  não pode né, pq não tem nada, CUIDADO COM .toString em null's
//melhor é sempre ter um valor padrão para o que se convert .toString()

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5

console.log(produto.preco)

produto.preco = undefined //evitar sempre atribuir undefined

console.log(!!produto.preco)
//delete produto.preco forma de se deletar o atribuito que ta undefined
console.log(produto) 

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)



