const buttonElement = document.querySelector('#calculate');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const totalSpan = document.querySelector('#total');

const calculateTotal = () => {
	let billValue = billInput.value;
	let tipValue = tipInput.value;
	const totalValue = billValue * (1 + tipValue / 100);

	if (billValue.includes('-') || tipValue.includes('-')) {
		alert('Please input proper value');
		billInput.value = 0;
		tipInput.value = 0;
	} else {
		totalSpan.innerText = totalValue.toFixed(0);
	}
};

buttonElement.addEventListener('click', calculateTotal);
