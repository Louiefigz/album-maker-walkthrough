import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//Changing RecipesInput with the connect method:
import { ConnectedRecipesInput } from './components/recipes/RecipesInput'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { Router, Route, browserHistory } from 'react-router'
import { ConnectedRecipeShow } from "./components/recipes/RecipeShow";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/recipes/new" component={ConnectedRecipesInput} />
      <Route path="/recipe/:id" component={ConnectedRecipeShow} />
    </Router>
  </Provider>,
  document.getElementById('root'));
