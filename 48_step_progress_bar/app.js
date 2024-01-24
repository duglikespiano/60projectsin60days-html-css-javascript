const progressElement = document.querySelector('.progress-bar-front');
const previousElement = document.querySelector('.previous');
const nextElement = document.querySelector('.next');
const stepElements = document.querySelectorAll('.step');

let currentChecked = 1;

const updateStepProgress = () => {
	stepElements.forEach((stepElement, index) => {
		if (index < currentChecked) {
			stepElement.classList.add('checked');
			stepElement.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${index === 0 ? 'Start' : index === stepElements.length - 1 ? 'Final' : `Step ${index}`}</small>
      `;
		} else {
			stepElement.classList.remove('checked');
			stepElement.innerHTML = `
      <i class="fas fa-times"></i>
      `;
		}
	});
	const checkedNumber = document.querySelectorAll('.checked');
	progressElement.style.width = `${((checkedNumber.length - 1) / (stepElements.length - 1)) * 100}%`;

	if (currentChecked === 1) {
		previousElement.disabled = true;
	} else if (currentChecked === stepElements.length) {
		nextElement.disabled = true;
	} else {
		previousElement.disabled = false;
		nextElement.disabled = false;
	}
};

nextElement.addEventListener('click', () => {
	currentChecked++;
	if (currentChecked > stepElements.length) {
		currentChecked = stepElements.length;
	}
	updateStepProgress();
});

previousElement.addEventListener('click', () => {
	currentChecked--;
	if (currentChecked < 1) {
		currentChecked = 1;
	}
	updateStepProgress();
});

if (currentChecked === 1) {
	previousElement.disabled = true;
}
