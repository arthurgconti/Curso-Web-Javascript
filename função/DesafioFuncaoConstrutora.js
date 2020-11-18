function Pessoa(name) {
    this.name = name

    this.falar = function () {
        console.log(`Meu nome é: ${name}`)
    }
}

const p1 = new Pessoa('Jorge')
p1.falar()