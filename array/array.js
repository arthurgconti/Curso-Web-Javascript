console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Jorge', 'Carlos', 'Bia')
console.log(aprovados)

aprovados = ['Jorge', 'Carlos', 'Bia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Arthur'
aprovados.push('Ana')
console.log(aprovados.length)

aprovados[9] = 'Rafa'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[5] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1] 

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Jorge', 'Carlos', 'Bia']
//serve pra adicionar, retirar ou adiconar e retirar elementos
//primeiro parametro é o indice que vai trabalhar, quantidade de elementos pra remover, pra adicionar elemento, colocar a quantidade de exclusão 0 e passar os elementos
aprovados.splice(1,1,'Elemento 1','Elemento 2')
console.log(aprovados)