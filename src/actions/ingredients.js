export function createIngredient(ingredient){
  return {type: 'CREATE_INGREDIENT', payload: ingredient}
}
export function recipeFormAddIngredient(ingredientId){
  return {type: 'RECIPE_FORM_ADD_INGREDIENT', payload: ingredientId}
}

export function updateIngredient(ingredient){
  return {type: 'UPDATE_INGREDIENT', payload: ingredient}
}
export function deleteIngredient(ingredient){
  debugger 
  return {type: 'DELETE_INGREDIENT', payload: ingredient}
}


export function findIngredients(ingredients,  recipeId){
    debugger
    if (ingredients.ingredients !== undefined){

      return  ingredients.ingredients.filter((item)=> item.recipeId === recipeId.recipeId )
    } else {
      return  ingredients.filter((item)=> item.recipeId === recipeId.recipeId )

    }
}
