import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findIngredients } from "../../actions/ingredients";




export class Ingredients extends Component {
  constructor(){
    super();
    this.state={
      recipeId: 0
    }
  }
  componentWillMount(){
    this.setState({
      recipeId: this.props.recipeId,
      ingredients: this.props.ingredients,
      recipes: this.props.recipes
    })

  }




  render(){
    let ingredients = findIngredients(this.props.ingredients, this.state);
    let ingredient = ingredients.map(function(ingredient){
      return <li key={ingredient.id}>{ingredient.name}</li>
    })
    return(
        <div>
          Ingredients
          <ul>
            {ingredient}
          </ul>
        </div>
    )
  }
}


export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)


function mapStateToProps(state){
  return {ingredients: state.ingredients,
          recipes: state.recipes}
}
