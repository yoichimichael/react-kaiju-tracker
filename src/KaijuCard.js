// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'
import Sighting from './Sighting'
import CreateSightingForm from './CreateSightingForm'

class KaijuCard extends React.Component {

  state = {
    toggleEdit: false,
    showSightings: false,
    showCreateSighting: false
  }

  toggleEdit = () => {
    this.setState(previousState => {
      return {
        toggleEdit: !previousState.toggleEdit
      }
    })
  };

  toggleShowSightings = (e) => {
    console.log("hit")
    this.setState(previousState => {
      return {
        showSightings: !previousState.showSightings
      }
    })
  };

  toggleCreateSighting = () => {
    this.setState(previousState => {
      return {
        showCreateSighting: !previousState.showCreateSighting
      }
    })
  };

  // How can we show the edit form conditionally?
  render() {

    const {id, name, power, image, findSightings, addSighting} = this.props

    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={name} />

        <button onClick={this.toggleShowSightings}>{this.state.showSightings ? `Hide ${findSightings(id).length} Sightings` : `Show ${findSightings(id).length} Sightings`}</button>
        {this.state.showSightings ?
          <div>
            <h4>Sightings:</h4>
            {findSightings(id).map(sighting => <Sighting key={sighting.id} {...sighting}/>)}
          </div> : null
        }
        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={this.toggleEdit}>Edit</button>
        {this.state.toggleEdit ? <EditKaijuForm {...this.props} toggleEdit={this.toggleEdit}/> : null}

        <button className='create-sighting-button' onClick={this.toggleCreateSighting}>Add Sighting</button>
        {this.state.showCreateSighting ? 
          <CreateSightingForm 
            kaijuId={id} 
            toggleCreateSighting={this.toggleCreateSighting} 
            addSighting={addSighting}
          /> : null
        }
      </div>
    )
  }
}

export default KaijuCard
