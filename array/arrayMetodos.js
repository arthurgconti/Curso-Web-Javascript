const pilotos = ['Schumacher','Senna','Verstappen','Hamilton','Massa']
//remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos) 

pilotos.push('Bottas')
console.log(pilotos) 

//remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos) 

//Adiciona no indice 0 (primeiro elemento)
pilotos.unshift('Russell')
console.log(pilotos) 

//splice, exemplo anterior, pode remover ou adicionar elementos
//adicionando
pilotos.splice(2,0,'Vettel','Ocon')
console.log(pilotos) 

pilotos.splice(3,1)
console.log(pilotos) 

//slice retorna novo array a partir de um indice, um pedaço do array
const algunsDosPilotos = pilotos.slice(3)
console.log(algunsDosPilotos) 
const algunsDosPilotos2 = pilotos.slice(1,4)
console.log(algunsDosPilotos2);