import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteIngredient } from '../../actions/ingredients';
import { updateIngredient } from '../../actions/ingredients';
// import {ConnectedIngredientsInput} from './IngredientsInput';
//
export class AddIngredient extends Component {
  constructor(){
    super();
    this.state ={
      update: false,
      name: '',
      id: 0,
      recipeId: 0
    }
  }

  componentWillMount(){
    this.setState({
      id: this.props.id,
      recipeId: this.props.recipeId,
    })
  }
  handleClick(event){
    event.preventDefault();
    this.props.deleteIngredient(this.props)
  }

  handleUpdate(e){
    e.preventDefault();
    this.setState({
      update: true
    })
  }

  updateName(e){
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })

  }

  handleForm(e){
    e.preventDefault();
    this.props.updateIngredient(this.state);
    this.setState({
      name: '',
      update: false
    });
  }

  render(){
    return(
      this.state.update ?
      <div>
      <form onSubmit={(event)=> this.handleForm(event)}>
        <input placeholder={this.props.ingredient} value={this.state.name} onChange={(event)=> this.updateName(event)}/>
        <input type="submit"/>
        </form>
      </div>
      :
      <div>
        <li>{this.props.ingredient}</li>
        <button onClick={ (event)=>this.handleClick(event)}> Delete </button>
        <button onClick={ (event)=>this.handleUpdate(event)}> Update </button>

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

  return bindActionCreators({
    deleteIngredient: deleteIngredient,
    updateIngredient: updateIngredient}, dispatch)
}
