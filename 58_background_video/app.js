const button = document.querySelector('button');
const video = document.querySelector('.background-video');
const fa = document.querySelector('.fa');
const preloader = document.querySelector('.preloader');

button.addEventListener('click', () => {
	if (button.classList.contains('pause')) {
		button.classList.remove('pause');
		fa.classList.add('fa-pause');
		fa.classList.remove('fa-play');
		video.play();
	} else {
		button.classList.add('pause');
		fa.classList.add('fa-play');
		fa.classList.remove('fa-pause');
		video.pause();
	}
});

window.addEventListener('load', () => {
	preloader.classList.add('active');
	setTimeout(() => {
		preloader.style.display = 'none';
	}, 3000);
});
