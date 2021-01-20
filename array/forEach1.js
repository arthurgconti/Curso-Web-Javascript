const aprovados = ['joão','ana','cleber','danilo']

aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}, ${nome}`);
})

aprovados.forEach(nome=>console.log(nome))

const exibirAprovado = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovado)