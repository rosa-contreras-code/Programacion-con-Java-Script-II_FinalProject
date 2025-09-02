import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
    recipe: {
    },
    search:{
      query: "",
      results: []
    }
}

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    // console.log("resp",resp);
    // console.log('data', data);
    // console.log('state.recipe', state.recipe);
  } catch (error) {
    console.log(`${error} 💥💥💥💥`);
    throw error;
  }
};

export const loadSearchResults = async (query) =>{
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}/?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (error) {
    console.log(`${error} 💥💥💥💥`);
    throw error;
  }
}