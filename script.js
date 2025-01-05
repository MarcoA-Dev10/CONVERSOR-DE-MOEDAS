

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")


    const dolarToday = 6.15
    const euroToday = 6.30
    const libraToday = 7.10



    if (currencySelect.value == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")



    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
    }



}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)