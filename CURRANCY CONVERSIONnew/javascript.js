function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (amount === '' || isNaN(amount)) {
        resultDiv.textContent = 'Please enter a valid amount';
        return;
    }

    const apiKey = '0f91e74cc85517a186641e09'; // Your API key
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[toCurrency];
            if (!rate) {
                resultDiv.textContent = 'Currency not supported';
                return;
            }
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
            resultDiv.textContent = 'Error fetching exchange rate';
        });
}
