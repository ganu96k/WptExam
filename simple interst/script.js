document.getElementById('calculateSI').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers");
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    document.getElementById('result').textContent = `Simple Interest: ${simpleInterest.toFixed(2)}`;
});

document.getElementById('calculateCI').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const compound = parseFloat(document.getElementById('compound').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compound)) {
        alert("Please enter valid numbers");
        return;
    }

    const compoundInterest = principal * Math.pow((1 + rate / (100 * compound)), compound * time) - principal;
    document.getElementById('result').textContent = `Compound Interest: ${compoundInterest.toFixed(2)}`;
});
