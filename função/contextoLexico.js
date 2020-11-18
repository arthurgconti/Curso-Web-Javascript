const valor =  'Global'

function minhaFuncao(){
    console.log()
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()