// em JS o == se refere a igualdade entre valores, e o === ele é estritamente igual, ou seja, compara valores e tipos
console.log('01)','1' == 1)
console.log('02)', '1'=== 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)


//0 é o marco zero, data referencia do JS 01/01/1970
const d1 = new Date(0)
const d2 = new Date(0)

//referência, então tanto faz ser estritamente ou não, já que os dois tem endereço de memória diferente
console.log('09)', d1 === d2 )
console.log('10)',d1 == d2 )
//aqui o get time traz number então o estritamente daria diferença se as datas fossem diferentes
console.log('11)',d1.getTime() === d2.getTime())

console.log('12)', undefined == null )
console.log('13)', undefined === null)
