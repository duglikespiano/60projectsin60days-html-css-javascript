const currencyFirstElement = document.querySelector('.currency-first');
const valueFirstElement = document.querySelector('.value-first');
const currencySecondElement = document.querySelector('.currency-second');
const valueSecondElement = document.querySelector('.value-second');
const exchangeRateElement = document.querySelector('.exchange-rate');
const apiKey = '';

const updateRate = () => {
	const fetchURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirstElement.value}`;
	fetch(fetchURL)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.conversion_rates[currencySecondElement.value];
			exchangeRateElement.innerText = `1 ${currencyFirstElement.value} = ${rate.toFixed(2)} ${currencySecondElement.value}`;
			valueSecondElement.value = (valueFirstElement.value * rate).toFixed(2);
		});
};

updateRate();

currencyFirstElement.addEventListener('change', updateRate);
currencySecondElement.addEventListener('change', updateRate);
valueFirstElement.addEventListener('input', updateRate);
