let formElement = document.querySelector(".js-form");
let eurElement = document.querySelector(".js-EUR");
let usdElement = document.querySelector(".js-USD");
let chfElement = document.querySelector(".js-CHF");
let gbpElement = document.querySelector(".js-GBP");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let rateChoiceElement = document.querySelector(".js-rateChoice");

let rateEUR = 4.51;
let rateUSD = 4.15;
let rateCHF = 4.62;
let rateGBP = 5.18;


eurElement.addEventListener("input", () => {
    exchangeRateElement.value = rateEUR;
    rateChoiceElement.innerText = "(EUR)";
    resultElement.innerText = "";
});

usdElement.addEventListener("input", () => {
    exchangeRateElement.value = rateUSD;
    rateChoiceElement.innerText = "(USD)";
    resultElement.innerText = "";
});

chfElement.addEventListener("input", () => {
    exchangeRateElement.value = rateCHF;
    rateChoiceElement.innerText = "(CHF)";
    resultElement.innerText = "";
});

gbpElement.addEventListener("input", () => {
    exchangeRateElement.value = rateGBP;
    rateChoiceElement.innerText = "(GBP)";
    resultElement.innerText = "";
});



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value

    let result = exchangeRateElement.value * amount

    resultElement.innerText = `${result.toFixed(2)} PLN`;

});