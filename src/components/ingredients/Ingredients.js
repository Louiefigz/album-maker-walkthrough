import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findIngredients } from "../../actions/ingredients";
import { ConnectedAddIngredient } from './AddIngredient';



export class Ingredients extends Component {
  constructor(){
    super();
    this.state={
      ingredients: [],
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

  componentWillReceiveProps(nextProps){
    this.setState({
      ingredients: nextProps.ingredients
    })
  }
  // componentWillUpdate(nextProps, nextState){
  //   debugger
  //   this.setState({
  //     ingredients: this.state.ingredients.ingredients.concat([nextProps.ingredients[0]])
  //   })
  // }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //   if (nextState.ingredients.ingredients !== undefined){
  //
  //     return nextProps.ingredients.length !== nextState.ingredients.ingredients.length ? true : false
  //   }else {
  //     return nextProps.ingredients.length !== nextState.ingredients.length ? true : false
  //
  //   }
  // }

  componentDidUpdate(){

  }

  handleClick(e){

  }


  render(){
    let ingredients = findIngredients(this.state.ingredients, this.state);
    // let ingredient = ingredients.map(function(ingredient){
    //   return <li key={ingredient.id}>{ingredient.name} </li>
    // })

    let ingredient = ingredients.map(function(ingredient){
      console.log('working')
       return <ConnectedAddIngredient key={ingredient.id}
               ingredient={ingredient.name}
               id={ingredient.id}
               recipeId= {ingredient.recipeId}/>
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
            //
            // {ingredients.map(ingredient =>
            //   <li key={ingredient.id}>
            //     { ingredient.name }
            //
            //   </li>
            // )}


export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)


function mapStateToProps(state){
  return {ingredients: state.ingredients,
          recipes: state.recipes}
}
