{
    {
        {
            {
                var sera ="Será?"//fica visível pra qualquer bloco de função com exceção de função, que ela não será vista
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123;
}

teste()
console.log(local)

//var tem o conceito de global ou escopo de função, global vai pro window. que é objeto que contem tudo 
