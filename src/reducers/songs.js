// This generated a random number that we are using to give unique
// a id to every ingredient that we create

// import Recipe from "./albums";

import uuidV4  from 'uuid/v4';
const initialState = [{songs:[]}]

export default function songs(state = initialState, action){
  switch (action.type) {
    case 'CREATE_SONG':
      let song = Object.assign({}, action.payload, {id: uuidV4()})
      if (state[0]!== undefined){
        debugger
        return Object.assign({}, state[0], {
          songs: state[0].songs.concat([song])
        })
      } else {
        debugger
        return Object.assign({}, state, {
          songs: state.songs.concat([song])
        })
      }
    case "DELETE_SONG":
      const deletedObj = state.songs.filter((ing) => ing.id !== action.payload.id);
      return Object.assign({}, state, {
        songs: deletedObj
      })
    case "UPDATE_SONG":

    const updatedItems = state.songs.map(item => {
      if(item.id === action.payload.id){
        return { ...item, ...action.payload }
      }
        return item
      })

      return Object.assign({}, state, {
        songs: updatedItems
      })

    default:
      return state;
  }
}


//
// export function unselectedsongs(songs, selectedIngredientIds){
//   return songs.filter(function(ingredient){
//       return selectedIngredientIds.includes(ingredient.id)
//   })
// }
//
// export function findIngredientById(id, songs){
//   return songs.find(function(ingredient){
//     return ingredient.id === id
//   })
// }
