{
    const exchangeRateElement = document.querySelector(".js-exchangeRate");
    const resultElement = document.querySelector(".js-result");
    const rateChoiceElement = document.querySelector(".js-rateChoice");

    const inputElementEUR = () => {
        const rateEUR = 4.51;
        exchangeRateElement.value = rateEUR;
        rateChoiceElement.innerText = "(EUR)";
        resultElement.innerText = "";
    }

    const inputElementUSD = () => {
        const rateUSD = 4.15;
        exchangeRateElement.value = rateUSD;
        rateChoiceElement.innerText = "(USD)";
        resultElement.innerText = "";
    }

    const inputElementCHF = () => {
        const rateCHF = 4.62;
        exchangeRateElement.value = rateCHF;
        rateChoiceElement.innerText = "(CHF)";
        resultElement.innerText = "";
    }

    const inputElementGBP = () => {
        const rateGBP = 5.18;
        exchangeRateElement.value = rateGBP;
        rateChoiceElement.innerText = "(GBP)";
        resultElement.innerText = "";
    }

    const currentResultText = (result) => {
        resultElement.innerText = `${result.toFixed(2)} PLN`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const result = exchangeRateElement.value * amountElement.value

        currentResultText(result);
    }

    const init = () => {
        const eurElement = document.querySelector(".js-EUR");
        const usdElement = document.querySelector(".js-USD");
        const chfElement = document.querySelector(".js-CHF");
        const gbpElement = document.querySelector(".js-GBP");
        const formElement = document.querySelector(".js-form");

        eurElement.addEventListener("input", inputElementEUR);
        usdElement.addEventListener("input", inputElementUSD);
        chfElement.addEventListener("input", inputElementCHF);
        gbpElement.addEventListener("input", inputElementGBP);

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}