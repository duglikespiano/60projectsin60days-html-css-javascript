const tabs = document.querySelector('.tabs');
const buttons = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabs.addEventListener('click', (event) => {
	const id = event.target.dataset.id;
	if (id) {
		buttons.forEach((button) => {
			button.classList.remove('live');
		});
		event.target.classList.add('live');
		articles.forEach((article) => {
			article.classList.remove('live');
		});
		const element = articles[id - 1];
		element.classList.add('live');
	}
});
