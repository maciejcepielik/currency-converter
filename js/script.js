{
    const exchangeRateElement = document.querySelector(".js-exchangeRate");
    const resultElement = document.querySelector(".js-result");
    const rateChoiceElement = document.querySelector(".js-rateChoice");

    const changeCurrentCurrency = (name, rate) => {
        exchangeRateElement.value = rate;
        rateChoiceElement.innerText = name;
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

        eurElement.addEventListener("input", () => {
            changeCurrentCurrency("(EUR)", 4.51)
        });
        usdElement.addEventListener("input", () => {
            changeCurrentCurrency("(USD)", 4.15)
        });
        chfElement.addEventListener("input", () => {
            changeCurrentCurrency("(CHF)", 4.62)
        });
        gbpElement.addEventListener("input", () => {
            changeCurrentCurrency("(GBP)", 5.18)
        });

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}