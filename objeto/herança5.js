console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function (){
    return this.split('').reverse().join('');
}

console.log('Javascript é incrível'.reverse());

Array.prototype.first = function(){
    return this[0]
}

const array = [1,3,5,7] 

console.log(array.first());

String.prototype.toString = function (){
    return 'Vishe'
}

console.log('Javascript é incrível'.reverse());