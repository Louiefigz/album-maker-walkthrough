import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ConnectedAlbums }from "./Albums";

import { addAlbum } from '../../actions/albums';
// import { Addsongs } from '../songs/Addsongs';


export class AlbumsInput extends Component {
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  handleOnAlbumNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnSubmit(event){

    event.preventDefault()
    let album = Object.assign({}, this.state)
    this.props.addAlbum(album);
    this.setState({
      name: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>

          <input type="text" onChange={this.handleOnAlbumNameChange.bind(this)} placeholder="Album name"/>
          <input type="submit" />
        </form>
        <ConnectedAlbums />
      </div>
    )
  }
}

export const ConnectedAlbumsInput = connect(null, mapDispatchToProps)(AlbumsInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({addAlbum: addAlbum}, dispatch)
}
