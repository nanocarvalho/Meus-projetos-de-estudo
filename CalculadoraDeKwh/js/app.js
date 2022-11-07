function calculaPreco() {
    let consumoW = Number(document.getElementById("consumoW").value)
    let horas = Number(document.getElementById("horas").value)
    let diasUser = Number(document.getElementById("dias").value)
    let preco = Number(document.getElementById("preco").value)

    let resultadoKwh = document.getElementById("atualizaGastoKwh")
    let resultadoPrecoFinal = document.getElementById("atualizaPrecoReal")


    if(diasUser < 1) {
        diasUser = 1
    }

    if(horas < 1) {
        horas = 1
    }


    //Kwh = Watts x Horas  x Dias de uso / 1000
    let kwhTotal = (consumoW * horas * diasUser) / 1000
    let precoFinal = 0

    kwhTotal = kwhTotal.toFixed([2])
    preco = preco.toFixed([2])

    //caso o usuario não digite a quantidade de dias ou horas, será assumido 1

    precoFinal = kwhTotal * preco

    resultadoKwh.textContent = kwhTotal + ' Kwh'
    resultadoPrecoFinal.textContent = 'R$: ' + precoFinal.toFixed([2])
}

function clearFields() {
    //acho que aqui, se eu usasse var conseguia acessar
    //com let tava dando uns bugs
    //então recriei eles aqui

    let resultadoKwh = document.getElementById("atualizaGastoKwh")
    let resultadoPrecoFinal = document.getElementById("atualizaPrecoReal")

    consumoW.value = ''
    horas.value = ''
    dias.value = ''
    preco.value = ''
    resultadoKwh.textContent = '0 Kwh'
    resultadoPrecoFinal.textContent = 'R$ 0,00'

}
