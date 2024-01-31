let number = 0;

const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

console.log(value);

buttons.forEach((button) => {
	button.addEventListener('click', (event) => {
		const styles = event.currentTarget.classList;
		if (styles.contains('btn-danger')) {
			number--;
		} else if (styles.contains('btn-success')) {
			number++;
		} else {
			number = 0;
		}
		value.textContent = number;
		if (number > 0) {
			value.style.color = 'green';
		} else if (number < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = 'black';
		}
	});
});
