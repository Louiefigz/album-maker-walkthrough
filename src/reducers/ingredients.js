// This generated a random number that we are using to give unique
// a id to every ingredient that we create

// import Recipe from "./recipes";

import uuidV4  from 'uuid/v4';
const initialState = [{ingredients:[]}]

export default function ingredients(state = initialState, action){
  switch (action.type) {
    case 'CREATE_INGREDIENT':
    debugger
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      if (state[0]!== undefined){
        return Object.assign({}, state[0], {
          ingredients: state[0].ingredients.concat([ingredient])
        })
      } else {
        return Object.assign({}, state, {
          ingredients: state.ingredients.concat([ingredient])
        })
      }
    case "DELETE_INGREDIENT":
    debugger
      const deletedObj = state.ingredients.filter((ing) => ing.id !== action.payload.id);
      return Object.assign({}, state, {
        ingredients: deletedObj
      })
    case "UPDATE_INGREDIENT":
    debugger
    return {
        ...state,
        ingredients: state.map(ingredient => ingredient.id === action.id ?
            // transform the one with a matching id
            {  id: action.id, ingredient: action.task } :
            // otherwise return original todo
            ingredient
        )}
    default:
      return state;
  }
}


//
// export function unselectedIngredients(ingredients, selectedIngredientIds){
//   return ingredients.filter(function(ingredient){
//       return selectedIngredientIds.includes(ingredient.id)
//   })
// }
//
// export function findIngredientById(id, ingredients){
//   return ingredients.find(function(ingredient){
//     return ingredient.id === id
//   })
// }
