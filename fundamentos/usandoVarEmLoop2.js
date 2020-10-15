const funcs = []

for(var i =0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//pelo fato do escopo de var ser global, ele sempre vai printar o ultimo valor definido no programa pra i