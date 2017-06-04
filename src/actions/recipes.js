export function addRecipe(recipe){
  return {type: 'ADD_RECIPE', payload: recipe}
}

export function findRecipe( recipe, id){
  let recipeId = recipe.filter((r)=> r.id === id)
  return recipeId
}
