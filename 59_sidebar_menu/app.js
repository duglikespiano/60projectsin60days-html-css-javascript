const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.fa-times');

bars.addEventListener('click', () => {
	sidebar.classList.add('active');
	bars.classList.add('active');
});

closeButton.addEventListener('click', () => {
	sidebar.classList.remove('active');
	bars.classList.remove('active');
});
