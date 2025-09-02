import * as model from "./model.js";
import recipeView from "./views/RecipeView.js";
import searchView from "./views/SearchView.js";
import resultView from "./views/ResultView.js";

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    // console.log("id",id);
    if (!id) return;
    // console.log(recipeView);
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    // alert(error.message);
    recipeView.renderError(/*error.message*/);
  }
}

async function controlSearchResults() {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    
    await model.loadSearchResults(query);
    // console.log("Results", model.state.search.results);
    resultView.render(model.state.search.results)
    
  } catch (error) {
    console.error(`${error}‼️`)
  }
}

function init(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
// controlSearchResults();