export function createIngredient(ingredient){
  return {type: 'CREATE_INGREDIENT', payload: ingredient}
}
export function recipeFormAddIngredient(ingredientId){
  return {type: 'RECIPE_FORM_ADD_INGREDIENT', payload: ingredientId}
}

export function updateIngredient(ingredient){
  return {type: 'UPDATE_INGREDIENT', payload: ingredient}
}


export function findIngredients(ingredients,  recipeId){
  return  ingredients.filter((item)=> item.recipeId === recipeId.recipeId )
}
