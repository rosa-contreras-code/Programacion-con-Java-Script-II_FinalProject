import * as model from "./model.js";
import recipeView from "./views/RecipeView.js";

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log("id",id);
    if (!id) return;
    console.log(recipeView);
    recipeView.renderSpinner();
    await model.loadRecipe(id)
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error.message);
  }
}
["hashchange", "load"].forEach(ev => {
  window.addEventListener(ev, controlRecipes );
});
