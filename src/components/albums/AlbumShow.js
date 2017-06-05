import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAlbum } from '../../reducers/albums';
// import { bindActionCreators } from 'redux'
import { ConnectedSongsInput } from '../songs/SongsInput';
import { ConnectedSongs } from '../songs/Songs';
// We are using the goback method below
import {browserHistory} from "react-router";


export class AlbumShow extends Component {
  render(){
    var albumOne = findAlbum(this.props.albums,  this.props.params.id);
    if (albumOne.length === 0){
        var displayAlbum = <h1>Not found</h1>
    }else {
      var displayAlbum = <h1>{albumOne[0].name}</h1>

    }
    return(
        <div>
           {displayAlbum}
           <ConnectedSongs albumId={albumOne[0].id}/>
           < ConnectedSongsInput albumId={albumOne[0].id} />
           {/* this is how we go back to the previous page without losing your data*/}
           <button onClick={browserHistory.goBack}>Go Back</button>
        </div>
    )
  }
};


export const ConnectedAlbumShow = connect(mapStateToProps)(AlbumShow);

// We only use actions in order to package data for a reducer. If it's not going to be
// sent to a reducer, just call the function straight out.

function mapStateToProps(state){
  return {albums: state.albums}
}
