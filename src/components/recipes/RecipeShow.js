import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findRecipe } from '../../reducers/recipes';
// import { bindActionCreators } from 'redux'
import { ConnectedIngredientsInput } from '../ingredients/IngredientsInput';
import { ConnectedIngredients } from '../ingredients/Ingredients';
// We are using the goback method below
import {browserHistory} from "react-router";


export class RecipeShow extends Component {
  render(){
    var recipeOne = findRecipe(this.props.recipes,  this.props.params.id);
    if (recipeOne.length === 0){
        var displayRecipe = <h1>Not found</h1>
    }else {
      var displayRecipe = <h1>{recipeOne[0].name}</h1>

    }
    console.log(recipeOne);
    return(
        <div>
           {displayRecipe}
           <ConnectedIngredients recipeId={recipeOne[0].id}/>
           < ConnectedIngredientsInput recipeId={recipeOne[0].id} />
           {/* this is how we go back to the previous page without losing your data*/}
           <button onClick={browserHistory.goBack}>Go Back</button>
        </div>
    )
  }
};


export const ConnectedRecipeShow = connect(mapStateToProps)(RecipeShow);

// We only use actions in order to package data for a reducer. If it's not going to be
// sent to a reducer, just call the function straight out.

function mapStateToProps(state){
  return {recipes: state.recipes}
}
