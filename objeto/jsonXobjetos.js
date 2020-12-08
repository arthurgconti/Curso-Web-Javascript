const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj));

// console.log(JSON.parse("{'a':3,'b':3,'c':4}"));
console.log(JSON.parse('{"a":3,"b":3,"c":4}'));
console.log(JSON.parse('{"a":"Ronaldo","b":"Cleber","c":4}'));