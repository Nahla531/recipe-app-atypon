import Recipe from "../Models/recipe";
import RecipeDetails from "../Models/recipeDetail";

// URL of api
const Base_Url = process.env.REACT_APP_BASE_URL;
// API key
const apiKey = process.env.REACT_APP_API_KEY;
/*

 @function receives two parameters => userInput , pageLimit from the api to show the results,
 returns an array of objects based on query search


 */
export async function getRecipesData(query, pageLimit = 3) {
  try {
    const fetchData = await fetch(
      `${Base_Url}complexSearch?apiKey=${apiKey}&query=${query}&number=${pageLimit}`
    );
    const res = await fetchData.json();
    const results = res.results;
    const data = results.map(
      (item) => new Recipe(item.id, item.title, item.image)
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}
/*
 @function that gets recipe details accept an id as a parameter,
 returns an object with the recipe details in it.


 */
export async function getRecipeById(id) {
  try {
    const recipeData = await fetch(
      `${Base_Url}/${id}/information?apiKey=${apiKey}`
    );
    const res = await recipeData.json();

    // console.log(res);
    return new RecipeDetails(res.id, res.image, res.title, res.summary);
  } catch (e) {
    console.error(e);
  }
}
