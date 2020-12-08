function meuObjeto() {}
console.log(meuObjeto.prototype);
console.log(meuObjeto.__proto__);

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__);
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj2.__proto__)

meuObjeto.prototype.nome = 'Anderson'
meuObjeto.prototype.falar = function () {
    console.log(`meu nome é: ${this.nome}`);
}

obj1.falar()
obj2.nome = 'Carlos'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = 'Jorge'
obj3.falar()

const obj4={}

//algumas acertivas
console.log((new meuObjeto).__proto__ === meuObjeto.prototype);
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(obj4.__proto__ === Object.prototype);
console.log(meuObjeto.prototype.__proto__ === null);
console.log(Object.prototype.__proto__);