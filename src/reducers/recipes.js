import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(ingredient)

    default:
      return state;
  }
}

export function findRecipe( recipe, id){
  let recipeId = recipe.filter((r)=> r.id === id)
  return recipeId
}

// export function findRecipeIngredients(state=[], action){
//   debugger
//   switch (action.type) {
//     case 'FIND_ASSOCIATED':
//     debugger
//     default:
//       return state;
//   }
//   // return ingredients.find(function(ingredient){
//   //   return ingredient.id === id
//   // })
// }
