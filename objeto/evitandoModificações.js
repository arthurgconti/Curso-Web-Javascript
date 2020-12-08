//Object.preventExtension consegue alterar e deletar chaves, mas não criar novos
const aluno = Object.preventExtensions({
    nome: 'jorge',
    serie: '3EM',
    idade: 17
})

console.log('Extensível: ' + Object.isExtensible(aluno));

aluno.nome = 'Carlos'
aluno.materiaFavorita = 'Portugues'
delete aluno.idade

console.log(aluno);

//Object.seal não consegue adicionar nem deletar chaves, é permitido alterar valores
const pessoa = {
    nome: 'Juliana',
    idade: 19
}
Object.seal(pessoa)
console.log('Selado: ' + Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva'
pessoa.idade = 20
console.log(pessoa);

//Object.freeze = Seal + preventExtensions, ou seja, não se altera valores, nem adiciona ou exclui chaves