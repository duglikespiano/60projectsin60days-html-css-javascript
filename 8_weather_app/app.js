const apiKey = '';
const weatherDataElement = document.querySelector('#weather-data');
const cityInputElement = document.querySelector('#city-input');
const formElement = document.querySelector('form');

const getWeatherData = async (cityValue) => {
	try {
		if (typeof +cityValue !== NaN) {
			throw new Error('Invalid input');
		}
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		const temperature = Math.round(data.main.temp);
		const description = data.weather[0].description;
		const icon = data.weather[0].icon;
		const details = [
			`Feels like: ${Math.round(data.main.feels_like)}`,
			`Humidity: ${Math.round(data.main.humidity)}%`,
			`Wind speed: ${Math.round(data.wind.speed)}m/s`,
		];
		weatherDataElement.querySelector(
			'.icon'
		).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon" />`;
		weatherDataElement.querySelector('.temperature').innerText = `${temperature}°C`;
		weatherDataElement.querySelector('.description').innerText = description;
		weatherDataElement.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');
	} catch (error) {
		weatherDataElement.querySelector('.icon').innerHTML = ``;
		weatherDataElement.querySelector('.temperature').innerText = ``;
		weatherDataElement.querySelector('.description').innerText = 'An error happened, please check your input';
		weatherDataElement.querySelector('.details').innerHTML = '';
	}
};

formElement.addEventListener('submit', (event) => {
	event.preventDefault();
	const cityValue = cityInputElement.value;
	getWeatherData(cityValue);
});
