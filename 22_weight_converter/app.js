const inputElement = document.querySelector('.input-pounds');
const errorElement = document.querySelector('.error');
const resultElement = document.querySelector('.result');
let errorTime;
let resultTime;

const updateResult = () => {
	if (inputElement.value <= 0 || isNaN(inputElement.value)) {
		errorElement.innerText = 'Please enter a valid number';
		clearTimeout(errorTime);
		errorTime = setTimeout(() => {
			errorElement.innerText = '';
			inputElement.value = '';
		}, 2000);
	} else {
		resultElement.innerText = (+inputElement.value / 2.2).toFixed(2);
		clearTimeout(resultTime);
		resultTime = setTimeout(() => {
			resultElement.innerText = '';
			inputElement.value = '';
		}, 10000);
	}
};

inputElement.addEventListener('input', updateResult);
