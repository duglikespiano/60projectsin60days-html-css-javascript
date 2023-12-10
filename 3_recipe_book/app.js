const API_KEY = 'secret';
const recipeListElement = document.querySelector('#recipe-list');

const displayRecipes = (recipes) => {
	recipeListElement.innerHTML = '';
	recipes.forEach((recipe) => {
		const recipeItemElement = document.createElement('li');
		recipeItemElement.classList.add('recipe-item');
		const recipeImageElement = document.createElement('img');
		recipeImageElement.src = recipe.image;
		recipeImageElement.alt = 'recipe image';
		const recipeTitleElement = document.createElement('h2');
		recipeTitleElement.innerText = recipe.title;
		const recipeIndegridentsElement = document.createElement('p');
		recipeIndegridentsElement.innerHTML = `
    <strong>Ingredients : </strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(', ')}
    `;
		const recipeLinkElement = document.createElement('a');
		recipeLinkElement.href = recipe.sourceUrl;
		recipeLinkElement.innerText = 'View Recipe';

		recipeItemElement.appendChild(recipeImageElement);
		recipeItemElement.appendChild(recipeTitleElement);
		recipeItemElement.appendChild(recipeIndegridentsElement);
		recipeItemElement.appendChild(recipeLinkElement);
		recipeListElement.appendChild(recipeItemElement);
	});
};

const getRecipes = async () => {
	const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
	const data = await response.json();
	return data.recipes;
};

const init = async () => {
	const recipes = await getRecipes();
	displayRecipes(recipes);
};

init();
