const counterElements = document.querySelectorAll('.counter');

counterElements.forEach((counterElement) => {
	counterElement.innerText = '0';
	incrementCounter();
	function incrementCounter() {
		let currentNumber = +counterElement.innerText;
		const dataCeil = counterElement.getAttribute('data-ceil');
		const increment = dataCeil / 15;
		currentNumber = Math.ceil(currentNumber + increment);
		if (currentNumber < dataCeil) {
			counterElement.innerText = currentNumber;
			setTimeout(incrementCounter, 30);
		} else {
			counterElement.innerText = dataCeil;
		}
	}
});
