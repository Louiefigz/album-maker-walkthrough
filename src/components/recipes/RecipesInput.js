import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ConnectedRecipes }from "./Recipes";

import { addRecipe } from '../../actions/recipes'
// import { AddIngredients } from '../ingredients/AddIngredients';


export class RecipesInput extends Component {
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  handleOnRecipeNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnSubmit(event){

    event.preventDefault()
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe);
    this.setState({
      name: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>

          <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/>
          <input type="submit" />
        </form>
        <ConnectedRecipes />
      </div>
    )
  }
}

export const ConnectedRecipesInput = connect(null, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}
