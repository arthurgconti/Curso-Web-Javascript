function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    manterSaudavel = !comprarSorvete //operador unário


    //quando passamos assim, estamos falando que o chave/valor é igual ao valor, ou seja, comprarSorvete: comprarSorvete
    return {comprarSorvete,comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

