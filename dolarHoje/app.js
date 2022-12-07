const real = document.querySelector('[data-js="real-value"]')
const dollar = document.querySelector('[data-js="dollar-value"]')
const actualDollar = document.querySelector('[data-js="actual-dollar"]')
const minutes = 5 * (60 * 1000)
let apiResponse = ''

const dolarToday = async () => {
    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    const data = await response.json()
    apiResponse = data.USDBRL.bid
    dolarNow()

    //Update every 5 minutes
    const updateTimer = setInterval(()=> {
       dolarToday()
       clearInterval(updateTimer)
    }, minutes)
}

const dolarNow = () => {
    const apiFormated = Number.parseFloat(apiResponse).toFixed(2)
    actualDollar.textContent = `R$${apiFormated}`

    //Update the brazilian real value at every call
    real.setAttribute('value', apiFormated)
}

const updateInput = event => {
    //Stores the actual element that called
    const actualElement = event.target.getAttribute('data-js')
    const responseFormated = Number.parseFloat(apiResponse).toFixed(2)

    const dollarToReal = Number.parseFloat(dollar.value  * responseFormated).toFixed(2)
    const realtoDollar = Number.parseFloat(real.value / responseFormated).toFixed(2) 
    
    switch(actualElement) {
        case "real-value":
            dollar.value = realtoDollar
            break
        case "dollar-value":
            real.value = dollarToReal
            break
    }    
}

document.addEventListener('DOMContentLoaded', dolarToday)
real.addEventListener('change', updateInput)
dollar.addEventListener('change', updateInput)
