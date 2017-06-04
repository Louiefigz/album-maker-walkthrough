import React, { Component } from 'react';
import { connect } from 'react-redux'

// We're binding the createIngredient function from action
// and making it available as a prop for this component.
import { bindActionCreators } from 'redux'

import { createIngredient } from '../../actions/ingredients'

export class IngredientsInput extends Component {
  constructor(props){
    super(props)
    this.state = {name: '', recipeId: 0}
  }

  componentWillMount(){
    this.setState({
      recipeId: this.props.recipeId
    })
  }

  handleOnIngredientNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.createIngredient(this.state);
    this.setState({name:""})

  }
  render(){
    return(
      <form onSubmit={this.handleOnSubmit.bind(this)}>
      <p>
        <input type="text" onChange={this.handleOnIngredientNameChange.bind(this)} value={this.state.name} placeholder="Ingredient name"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)

function mapDispatchToProps(dispatch){
  // include the createIngredient action and bind that action to the dispatch method.
  // remember the action is packaging the data for the reducer aka store.
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}
