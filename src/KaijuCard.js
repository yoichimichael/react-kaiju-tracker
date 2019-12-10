// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{/* Kaiju name goes here */}</h2>
        <h3 className='kaiju-card-power'>Power: {/* Kaiju power goes here */}</h3>

        <img className='kaiju-card-image' src={/* Kaiju image goes here */} alt={/* Can use kaiju name again here :P */} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button'>Edit</button>

      </div>
    )
  }
}

export default KaijuCard
