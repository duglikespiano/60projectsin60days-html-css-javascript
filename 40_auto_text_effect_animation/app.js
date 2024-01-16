const containerElement = document.querySelector('.container');
const careers = ['YouTuber', 'Web Developer', 'Freelancer', 'Instructor'];

let careerIndex = 0;
let characterIndex = 0;

containerElement.innerHTML = `<h1>I am ${careers[careerIndex]}</h1>`;

const updateCareer = () => {
	containerElement.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(
		0,
		characterIndex
	)}</h1>`;
	characterIndex++;
	if (characterIndex === careers[careerIndex].length + 1) {
		careerIndex++;
		characterIndex = 0;
	}
	if (careerIndex === 4) {
		careerIndex = 0;
	}
	setTimeout(updateCareer, 100);
};

updateCareer();
