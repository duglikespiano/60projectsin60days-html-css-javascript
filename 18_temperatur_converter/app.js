const celsiusElement = document.querySelector('.celsius-input');
const fahrenheitElement = document.querySelector('.fahrenheit-input');
const kelvinElement = document.querySelector('.kelvin-input');

const computeTemperature = (event) => {
	const currentValue = +event.target.value;

	//event.target.name means input's attribute 'name'
	switch (event.target.name) {
		case 'celsius':
			fahrenheitElement.value = (currentValue * 1.8 + 32).toFixed(2);
			kelvinElement.value = (currentValue + 273.32).toFixed(2);
			break;

		case 'fahrenheit':
			celsiusElement.value = ((currentValue - 32) / 1.8).toFixed(2);
			kelvinElement.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
			break;

		case 'kelvin':
			celsiusElement.value = (currentValue - 273.32).toFixed(2);
			fahrenheitElement.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
			break;

		default:
			break;
	}
};

celsiusElement.addEventListener('change', computeTemperature);
fahrenheitElement.addEventListener('change', computeTemperature);
kelvinElement.addEventListener('change', computeTemperature);
