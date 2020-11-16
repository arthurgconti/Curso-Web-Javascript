const notas = [1.5, 7.5, 6.5, 10, 9, 8, 5.5, 6.5, 4.3, 8.8]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2);