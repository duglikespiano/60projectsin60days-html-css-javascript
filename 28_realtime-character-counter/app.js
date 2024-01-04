const textareaElement = document.querySelector('.textarea');
const totalCounterElement = document.querySelector('.total-counter');
const remainingCounterElement = document.querySelector('.remaining-counter');

const updateCounter = () => {
	totalCounterElement.innerText = textareaElement.value.length;
	remainingCounterElement.innerText = textareaElement.getAttribute('maxLength') - textareaElement.value.length;
};

textareaElement.addEventListener('keyup', () => {
	updateCounter();
});

updateCounter();
