import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch (action.type) {
    case 'ADD_ALBUM':
      let album = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(album)

    default:
      return state;
  }
}

export function findAlbum( album, id){
  let albumId = album.filter((r)=> r.id === id)
  return albumId
}

// export function findAlbumsongs(state=[], action){
//   debugger
//   switch (action.type) {
//     case 'FIND_ASSOCIATED':
//     debugger
//     default:
//       return state;
//   }
//   // return songs.find(function(ingredient){
//   //   return ingredient.id === id
//   // })
// }
