import React from 'react';

export default class Sighting extends React.Component {

  render(){
    return(
      <div>
        <h5>Location: {this.props.location}</h5>
        <p>{this.props.description}</p>
      </div>
    )
  }

}