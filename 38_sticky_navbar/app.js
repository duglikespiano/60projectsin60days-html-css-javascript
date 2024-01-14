const navbarElement = document.querySelector('.navbar');
const bottonContainerElement = document.querySelector('.bottom-container');

window.addEventListener('scroll', () => {
	if (window.scrollY > bottonContainerElement.offsetTop - navbarElement.offsetHeight - 50) {
		navbarElement.classList.add('active');
	} else {
		navbarElement.classList.remove('active');
	}
});
