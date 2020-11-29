//pessoa -> endereco -> {obj}
const pessoa = {nome:"João"}
pessoa.nome = 'Jorge'
console.log(pessoa)

//Vai dar b.o pq é outro obj
// pessoa = {nome: 'rosane'}

//Congelando o obj, não podendo mais modifica-lo, torna o objeto constante
Object.freeze(pessoa)
pessoa.nome = 'roberta'
console.log(pessoa.nome)