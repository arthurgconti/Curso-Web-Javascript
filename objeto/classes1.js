class Lancamento{
    constructor(nome = 'Genérico',valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
            
        })
        return valorConsolidade
    }
}

const salario = new Lancamento('Salário',4600)
const contaDeNet = new Lancamento('net',-90)

const contas = new CicloFinanceiro(6,2020)
contas.addLancamentos(salario,contaDeNet)

console.log(contas.sumario());
