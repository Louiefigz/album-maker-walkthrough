import React, { Component } from 'react';
import { Link } from 'react-router'

export class App extends Component {
  render() {
    return (
      <div>
        <Link to="/albums/new">Create New Album </Link>
      </div>
    );
  }
}

export default App;
