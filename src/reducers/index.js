
// combineReducers let's us access all the reducer functions in our
// reducers folder.  This allows us to combine all of them into one place.
import { combineReducers } from 'redux'

// Import the reducers in your folder here.
import songsReducer from './songs'
import albumsReducer from './albums'

// Make sure the reducers are exported and able to be used
// elsewhere.
export default combineReducers({
  songs: songsReducer,
  albums: albumsReducer,
})
