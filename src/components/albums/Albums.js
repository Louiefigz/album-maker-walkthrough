import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export class Albums extends Component {

  render(){

      let albums = this.props.albums.map(function(album){
        return   <Link to={{ pathname: '/albums/'+ album.id }}><li key={album.id}>{album.name}</li></Link>
      });

    return(
        <div>
          <ul>
            {albums}
          </ul>
        </div>
    )
  }
}
function mapStateToProps(state){
  return {albums: state.albums}
}
export const ConnectedAlbums = connect(mapStateToProps)(Albums);
