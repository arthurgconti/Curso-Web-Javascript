class Pessoa {

    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é: ${this.name}`)
    }
}

const pessoa1 = new Pessoa('André')

pessoa1.falar()

const pessoa = name => {
    return {
        falar: () => console.log(`Meu nome é: ${name}`)
    }
}

const p2 = pessoa('Antonio')

p2.falar()