const inputElement = document.querySelector('.input');
const bodyElement = document.body;

inputElement.checked = JSON.parse(localStorage.getItem('mode'));

const updateBody = () => {
	if (inputElement.checked) {
		bodyElement.style.backgroundColor = 'black';
	} else {
		bodyElement.style.backgroundColor = 'white';
	}
};

const updateLocalStorage = () => {
	localStorage.setItem('mode', JSON.stringify(inputElement.checked));
};

inputElement.addEventListener('click', () => {
	updateBody();
	updateLocalStorage();
});

updateBody();
