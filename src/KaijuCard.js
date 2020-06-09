// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    toggleEdit: false
  }

  toggleEdit = () => {
    this.setState(previousState => {
      return {
        toggleEdit: !previousState.toggleEdit
      }
    })
  };

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={"Maybe something should go here"} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={this.toggleEdit}>Edit</button>
        {this.state.toggleEdit ? <EditKaijuForm /> : null}
      </div>
    )
  }
}

export default KaijuCard
