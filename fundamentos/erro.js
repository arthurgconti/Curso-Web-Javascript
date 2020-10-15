function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    throw 'Message'
    // throw {
    //     nome: erro.nome,
    //     msg: erro.message,
    //     date:  New Date
    // }

}


function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+"!!!")
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('ufa')
    }
}

const obj = {nome:'Roberto'}
imprimirNomeGritando(obj)