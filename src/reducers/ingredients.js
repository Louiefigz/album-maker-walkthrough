// This generated a random number that we are using to give unique
// a id to every ingredient that we create

// import Recipe from "./recipes";

import uuidV4  from 'uuid/v4';
const initialState = [{ingredients:[]}]

export default function ingredients(state = initialState, action){
  switch (action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      if (state[0]!== undefined){
        debugger
        return Object.assign({}, state[0], {
          ingredients: state[0].ingredients.concat([ingredient])
        })
      } else {
        debugger
        return Object.assign({}, state, {
          ingredients: state.ingredients.concat([ingredient])
        })
      }
    case "DELETE_INGREDIENT":
      const deletedObj = state.ingredients.filter((ing) => ing.id !== action.payload.id);
      return Object.assign({}, state, {
        ingredients: deletedObj
      })
    case "UPDATE_INGREDIENT":

    const updatedItems = state.ingredients.map(item => {
      if(item.id === action.payload.id){
        return { ...item, ...action.payload }
      }
        return item
      })
      
      return Object.assign({}, state, {
        ingredients: updatedItems
      })

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
