function CriarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Pão',2.5))