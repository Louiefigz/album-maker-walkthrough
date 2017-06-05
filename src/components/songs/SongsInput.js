import React, { Component } from 'react';
import { connect } from 'react-redux'

// We're binding the createIngredient function from action
// and making it available as a prop for this component.
import { bindActionCreators } from 'redux'

import { createIngredient } from '../../actions/songs'

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
    this.props.createIngredient(this.state);
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
  // include the createIngredient action and bind that action to the dispatch method.
  // remember the action is packaging the data for the reducer aka store.
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}
