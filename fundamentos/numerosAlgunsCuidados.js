console.log(7 / 0) // gera um tipo Infinity
console.log("10"/2) // é possível fazer operações com números dentro de strings, porém tenha cuidado e respeite os padrões
console.log('3'+ 2) //como '+' tbm concatena aqui a string tem preferência
console.log('3'- 2) 
console.log("Show!" * 2) // essa multiplicação não funciona e gera um NaN
console.log(0.1+0.7) //gera uma imprecisão devido a especificação IEEE
//console.log(10.toString()) não é possível chamar funções diretamente do tipo numérico
console.log((10.345).toFixed(2)) //Porém é possível com um parênteses