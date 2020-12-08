function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('matemática', 15)
const aula2 = new Aula('portugues', 13)

console.log(aula1, aula2);

//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'geografia',18)
const aula4 = novo(Aula,'inglês',25)

console.log(aula3,aula4);