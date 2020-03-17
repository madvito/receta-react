import React from 'react'
import Recipe from './Recipe.js'

export const RecipeList=({recipes})=>{
    return(
        <div className="RecipesList">
            {
                recipes.map(recipe=>{
                    return(
                        <div key={recipe.recipe.label} className="RecipesList-item">
                            <Recipe
                                label={recipe.recipe.label}
                                url={recipe.recipe.url}
                                image={recipe.recipe.image}
                                ingredients={recipe.recipe.ingredientLines}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

