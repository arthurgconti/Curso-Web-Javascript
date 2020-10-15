let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!1)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //Ele é referente ao valor atribuído e não ao processo de atribuição

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))//De novo referente ao valor atribuído e não ao processo de atribuição

console.log('E para finalizar...')
console.log(!!('' || null || 0 ||' '))//Retorna o valor lógico
console.log(('' || null || 0 ||' '))// retorna o primeiro valor verdadeiro que encontrar

let nome = ''

console.log(nome ||'Desconhecido')

nome = 'Arthur'
console.log(nome ||'Desconhecido')