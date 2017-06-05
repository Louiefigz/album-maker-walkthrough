

export function createSong(song){
  return {type: 'CREATE_SONG', payload: song}
}

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
