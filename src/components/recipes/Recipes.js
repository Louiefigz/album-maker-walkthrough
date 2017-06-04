import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export class Recipes extends Component {

  render(){

      let recipes = this.props.recipes.map(function(recipe){
        return   <Link to={{ pathname: '/recipe/'+ recipe.id }}><li key={recipe.id}>{recipe.name}</li></Link>
      });

    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}
function mapStateToProps(state){
  return {recipes: state.recipes}
}
export const ConnectedRecipes = connect(mapStateToProps)(Recipes);
