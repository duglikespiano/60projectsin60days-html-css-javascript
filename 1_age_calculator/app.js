const buttonElement = document.querySelector('button');
const birthdayElement = document.querySelector('#birthday');
const resultElement = document.querySelector('#result');

const calculateAge = () => {
	const birthdayValue = birthdayElement.value;
	if (birthdayValue === '') {
		alert('Please enter your birthday');
	} else {
		const age = getAge(birthdayValue);
		if (age) {
			resultElement.innerText = `Your age is ${age} years old`;
		}
	}
};

const getAge = (birthdayValue) => {
	const currentDate = new Date();
	const birthdayDate = new Date(birthdayValue);
	const month = currentDate.getMonth() - birthdayDate.getMonth();
	let age = currentDate.getFullYear() - birthdayDate.getFullYear();
	if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
		age--;
	}
	if (age < 0) {
		alert('Please enter proper date');
		birthdayElement.value = '';
	} else {
		return age;
	}
};

buttonElement.addEventListener('click', calculateAge);
