import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteIngredient } from '../../actions/ingredients';
// import {ConnectedIngredientsInput} from './IngredientsInput';
//
export class AddIngredient extends Component {
//
  handleClick(event){
    event.preventDefault();
    this.props.deleteIngredient(this.props)
  }



  render(){
    return(
      <div>
      <li>{this.props.ingredient}</li>
      <button onClick={ (event)=>this.handleClick(event)}> Update </button>
      </div>
    )
  }
}
//
export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)
//
function mapDispatchToProps(dispatch){
  // include the createIngredient action and bind that action to the dispatch method.
  // remember the action is packaging the data for the reducer aka store.

  return bindActionCreators({deleteIngredient: deleteIngredient}, dispatch)
}
