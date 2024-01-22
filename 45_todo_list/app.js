const formElement = document.querySelector('form');
const inputElement = document.querySelector('input');
const ulElement = document.querySelector('ul');
let list = JSON.parse(localStorage.getItem('list'));

const updateTodoList = (task) => {
	let newTask = inputElement.value;
	if (task) {
		newTask = task.name;
	}

	const liElement = document.createElement('li');
	if (task && task.checked) {
		liElement.classList.add('checked');
	}
	liElement.innerText = newTask;
	inputElement.value = '';
	const checkButtonElement = document.createElement('i');
	checkButtonElement.classList.add('fas');
	checkButtonElement.classList.add('fa-check-square');
	const trashButtonElement = document.createElement('i');
	trashButtonElement.classList.add('fas');
	trashButtonElement.classList.add('fa-trash');
	ulElement.appendChild(liElement);
	liElement.appendChild(checkButtonElement);
	liElement.appendChild(trashButtonElement);

	checkButtonElement.addEventListener('click', () => {
		liElement.classList.toggle('checked');
		updateLocalStorage();
	});
	trashButtonElement.addEventListener('click', () => {
		liElement.remove();
		updateLocalStorage();
	});
	updateLocalStorage();
};

const updateLocalStorage = () => {
	const liElements = document.querySelectorAll('li');
	list = [];
	liElements.forEach((liElement) => {
		list.push({
			name: liElement.innerText,
			checked: liElement.classList.contains('checked'),
		});
	});
	localStorage.setItem('list', JSON.stringify(list));
};

formElement.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(inputElement.value);
	updateTodoList();
});

list.forEach((task) => {
	updateTodoList(task);
});
