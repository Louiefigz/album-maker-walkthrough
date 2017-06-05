import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteSong } from '../../actions/songs';
import { updateSong } from '../../actions/songs';
// import {ConnectedSongsInput} from './songsInput';
//
export class AddSong extends Component {
  constructor(){
    super();
    this.state ={
      update: false,
      name: '',
      id: 0,
      albumId: 0
    }
  }

  componentWillMount(){
    this.setState({
      id: this.props.id,
      albumId: this.props.albumId,
    })
  }
  handleClick(event){
    event.preventDefault();
    this.props.deleteSong(this.props)
  }

  handleUpdate(e){
    e.preventDefault();
    this.setState({
      update: true
    })
  }

  updateName(e){
    e.preventDefault();
    this.setState({
      name: e.target.value,
    })

  }

  handleForm(e){
    e.preventDefault();
    this.props.updateSong(this.state);
    this.setState({
      name: '',
      update: false
    });
  }

  render(){
    debugger
    return(
      this.state.update ?
      <div>
      <form onSubmit={(event)=> this.handleForm(event)}>
        <input placeholder={this.props.name} value={this.state.name} onChange={(event)=> this.updateName(event)}/>
        <input type="submit"/>
        </form>
      </div>
      :
      <div>
        <li>{this.props.name}</li>
        <button onClick={ (event)=>this.handleClick(event)}> Delete </button>
        <button onClick={ (event)=>this.handleUpdate(event)}> Update </button>

      </div>
    )
  }
}
//
export const ConnectedAddSong = connect(null, mapDispatchToProps)(AddSong)
//
function mapDispatchToProps(dispatch){
  // include the createIngredient action and bind that action to the dispatch method.
  // remember the action is packaging the data for the reducer aka store.

  return bindActionCreators({
    deleteSong: deleteSong,
    updateSong: updateSong}, dispatch)
}
