import React, { Component } from 'react';
import { connect } from 'react-redux'

// We're binding the createSong function from action
// and making it available as a prop for this component.
import { bindActionCreators } from 'redux';
import { createSong } from '../../actions/songs';

export class songsInput extends Component {
  constructor(props){
    super(props)
    this.state = {name: '', albumId: 0}
  }

  componentWillMount(){
    this.setState({
      albumId: this.props.albumId
    })
  }

  handleOnIngredientNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.createSong(this.state);
    this.setState({name:""})

  }
  render(){
    return(
      <form onSubmit={this.handleOnSubmit.bind(this)}>
      <p>
        <input type="text" onChange={this.handleOnIngredientNameChange.bind(this)} value={this.state.name} placeholder="Ingredient name"/>
      </p>
        <input type="submit" />
      </form>
    )
  }
}

export const ConnectedSongsInput = connect(null, mapDispatchToProps)(songsInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    createSong: createSong}, dispatch)
}
