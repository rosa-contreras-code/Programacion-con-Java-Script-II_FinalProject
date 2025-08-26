const e=document.querySelector(".recipe");!async function(){try{var s=e;let i=`
        <div class="spinner">
          <svg>
            <use href="${{}}#icon-loader"></use>
          </svg>
        </div>`;s.innerHTML="",s.insertAdjacentHTML("afterbegin",i);let c=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),n=await c.json(),r=n.data.recipe;r={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookTime:r.cooking_time,ingredients:r.ingredients},console.log("resp",c),console.log("data",n),console.log("recipe",r);let a=`
        <figure class="recipe__fig">
          <img src="${r.image}" alt="${r.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${r.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${{}}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${r.cookTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${{}}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${r.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--decrease-servings">
                <svg>
                  <use href="${{}}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${{}}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${{}}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${{}}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${r.ingredients.map(e=>`
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="${{}}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${e.quantity||""}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${e.unit||""}</span>
                      ${e.description}
                    </div>
                </li>`).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${r.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${r.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${{}}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",a)}catch(e){alert(e.message)}}();
//# sourceMappingURL=Programación con Java Script II_FinalProject.6eb44f12.js.map
