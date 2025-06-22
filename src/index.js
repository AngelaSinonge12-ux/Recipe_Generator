/*function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: "Generating your recipe...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ApiKey = " 00f2bcb6do703a8a78cb7bbt08741b98";
  let prompt = "Generate a recipe for a delicious chocolate cake";
  let context = "";
  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={ApiKey}`;
  //make a call to the API
  axios.get(ApiUrl).then(displayRecipe);

  //display the recipe
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
*/

function displayPoem(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "00f2bcb6do703a8a78cb7bbt08741b98";
  let context =
    "You are a recipe generator expert and love to give short recipes. You mission is to generate a 4 line recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe.  ";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="response">⏳ Generating a recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
