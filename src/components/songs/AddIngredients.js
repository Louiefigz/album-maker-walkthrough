import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { ConnectedAddSong } from './AddSong.js'
// import { unselectedsongs, findIngredientById } from '../../reducers/songs'

export class Addsongs extends Component {

  handleOnSubmit(event){
    event.preventDefault()
  }
  render(){
    // let addsongs = this.props.unselectedsongs &&  this.props.unselectedsongs.map((ingredient) => {
    //   return <ConnectedAddIngredient {...ingredient} />
    // })
    // let songs = this.props.selectedsongs && this.props.selectedsongs.map((ingredient) => {
    //   return <li> {ingredient.name} </li>
    // })
    return(
      <div>
        songs

        <ConnectedAddSong />
      </div>
    )
  }
}



export const ConnectedAddsongs = connect(null)(Addsongs)


// <div>
//   songs
//   {songs}
// </div>
// <div>
//   Add More songs
//   {addsongs}
// </div>
//
// function mapStateToProps(state){
//   let selectedsongs = state.recipeForm.ingredientIds.map(function(ingredientId){
//     return findIngredientById(ingredientId, state.songs)
//   })
//   return {songs: state.songs || [],
//     selectedsongs: selectedsongs || [],
//     unselectedsongs: unselectedsongs(state.songs, state.recipeForm.ingredientIds) || []}
// }
