import Recipe from "../models/recipe";
import RecipeDetails from "../models/recipeDetail";

// URL of api
const Base_Url = process.env.REACT_APP_BASE_URL;
// API key
const apiKey = process.env.REACT_APP_API_KEY;

export async function getRecipes(query, pageLimit = 3) {
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

export async function getRecipeById(id) {
  try {
    const recipeData = fetch(`${Base_Url}/${id}/information?apiKey=${apiKey}`);
    const res = await recipeData.json();

    console.log(res);
    //   return new RecipeDetails(
    //     results.id,
    //     results.image,
    //     results.title,
    //     results.summary,
    //     results.sourceUrl
    //   );
  } catch (e) {
    console.error(e);
  }
}
