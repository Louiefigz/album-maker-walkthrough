import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createIngredient } from '../../actions/ingredients';
import {ConnectedIngredientsInput} from './IngredientsInput';

export class AddIngredient extends Component {

  handleOnClick(event){
    // this.props.recipeFormAddIngredient(this.props.id)
    event.preventDefault();
    this.props.createIngredient
  }
  render(){
    return(
      <div>
      
      <ConnectedIngredientsInput />
      </div>
    )
  }
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)

function mapDispatchToProps(dispatch){
  // include the createIngredient action and bind that action to the dispatch method.
  // remember the action is packaging the data for the reducer aka store.

  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}
