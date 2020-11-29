const a = 1
const b = 2
const c = 3

//antes do ecma2015
const obj1 ={a:a, b:b,c:c}
//dps
const obj2= {a,b,c}

const nomeAtri = 'nota'
const valorAtri = 7.6

const obj3 = {}
obj3[nomeAtri] = valorAtri
console.log(obj3)

const obj4= {[nomeAtri]:valorAtri}
console.log(obj4)


const obj5={
    funcao1:function(){

    },
    //forma reduzida para função ecma2015
    funcao2(){

    }
}