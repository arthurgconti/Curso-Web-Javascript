//Cadeia de prototipação
Object.prototype.attrib0 = 'z'
const avo = {
    attrib1: 'A'
}
const pai = {
    __proto__: avo,
    attrib2: 'B',
    attrib3: '3'
}
const filhe = {
    __proto__: pai,
    attrib3: 'C'
}

console.log(filhe.attrib0, filhe.attrib1, filhe.attrib2, filhe.attrib3);

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velAtual
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMaxima}km/h`
    }
}

const ferrari = {
    modelo:'Ferrari',
    velMaxima: 350, //Shadowing, basicamente, ele sobrescreve os valores herdados acima com o atual
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}` //super referencia a classe acima
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

volvo.acelerarMais(160)
console.log(volvo.status())

ferrari.acelerarMais(260)
console.log(ferrari.status())