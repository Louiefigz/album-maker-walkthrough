
// combineReducers let's us access all the reducer functions in our reducers folder.
// This allows us to combine all of them into one place.

import { combineReducers } from 'redux'

import songsReducer from './songs'
import albumsReducer from './albums'


export default combineReducers({
  songs: songsReducer,
  albums: albumsReducer,
})
//
