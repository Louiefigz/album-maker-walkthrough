import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//Changing albumsInput with the connect method:
import { ConnectedAlbumsInput } from './components/albums/AlbumsInput'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { Router, Route, browserHistory } from 'react-router'
import { ConnectedAlbumShow } from "./components/albums/AlbumShow";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/albums/new" component={ConnectedAlbumsInput} />
      <Route path="/albums/:id" component={ConnectedAlbumShow} />
    </Router>
  </Provider>,
  document.getElementById('root'));
