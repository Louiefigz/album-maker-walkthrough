import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findSongs } from "../../actions/songs";
import { ConnectedAddSong } from './AddSong';



export class Songs extends Component {
  constructor(){
    super();
    this.state={
      songs: [],
      albumId: 0
    }
  }
  componentWillMount(){
    this.setState({
      albumId: this.props.albumId,
      songs: this.props.songs,
      albums: this.props.albums
    })

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      songs: nextProps.songs
    })
  }
  // componentWillUpdate(nextProps, nextState){
  //   debugger
  //   this.setState({
  //     songs: this.state.songs.songs.concat([nextProps.songs[0]])
  //   })
  // }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //   if (nextState.songs.songs !== undefined){
  //
  //     return nextProps.songs.length !== nextState.songs.songs.length ? true : false
  //   }else {
  //     return nextProps.songs.length !== nextState.songs.length ? true : false
  //
  //   }
  // }

  componentDidUpdate(){

  }

  handleClick(e){

  }


  render(){
    let songs = findSongs(this.state.songs, this.state);
    // let ingredient = songs.map(function(ingredient){
    //   return <li key={ingredient.id}>{ingredient.name} </li>
    // })

    let song = songs.map(function(song){
      console.log('working')
       return <ConnectedAddSong key={song.id}
               name={song.name}
               id={song.id}
               albumId={song.albumId}/>
    })


    return(
        <div>
          songs
          <ul>
          {song}
          </ul>
        </div>
    )
  }
}
            //
            // {songs.map(ingredient =>
            //   <li key={ingredient.id}>
            //     { ingredient.name }
            //
            //   </li>
            // )}


export const ConnectedSongs = connect(mapStateToProps)(Songs)


function mapStateToProps(state){
  return {songs: state.songs,
          albums: state.albums}
}
