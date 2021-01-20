Array.prototype.forEach2 = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}

const aprovados = ['joão', 'ana', 'cleber', 'danilo']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice+1}) ${nome}`);
})