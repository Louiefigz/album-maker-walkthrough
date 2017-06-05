export function addAlbum(album){
  return {type: 'ADD_ALBUM', payload: album}
}

export function findAlbum( album, id){
  let albumId = album.filter((r)=> r.id === id)
  return albumId
}
