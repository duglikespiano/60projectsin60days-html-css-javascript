const counterElement = document.querySelector('.counter');
const loadingBarElement = document.querySelector('.loading-bar-front');
let loadingPercentage = 0;

const updateNumber = () => {
	if (loadingPercentage < 101) {
		counterElement.innerText = `${loadingPercentage}%`;
		loadingBarElement.style.width = `${loadingPercentage}%`;
		loadingPercentage++;
	}
};

setInterval(updateNumber, 10);
