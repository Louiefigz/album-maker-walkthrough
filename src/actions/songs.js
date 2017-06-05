export function createIngredient(ingredient){
  return {type: 'CREATE_SONG', payload: ingredient}
}
// export function recipeFormAddIngredient(ingredientId){
//   return {type: 'RECIPE_FORM_ADD_INGREDIENT', payload: ingredientId}
// }

export function updateSong(song){
  return {type: 'UPDATE_SONG', payload: song}
}
export function deleteSong(song){
  debugger
  return {type: 'DELETE_SONG', payload: song}
}


export function findSongs(songs,  albumId){
    if (songs.songs !== undefined){
      return  songs.songs.filter((item)=> item.albumId === albumId.albumId )
    } else {
      return  songs.filter((item)=> item.albumId === albumId.albumId )

    }
}
