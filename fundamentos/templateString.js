const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
//Template String conta os espaços
const template = `
Olá
${nome}!`

console.log(concatenacao,template)

//Expressões
console.log(`1 + 1 = ${1+1}`)


const up = texto => texto.toUpperCase();

console.log(`Ei...${up('cuidado')}!`)