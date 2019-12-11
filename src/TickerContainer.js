// React
import React from 'react'
// Randomizer
import random from './random'

const TickerContainer = ({kaijus}) => {

  const renderSightings = () => {
    // Create kaiju sightings if kaijus exist
    if (kaijus.length) {
      return kaijus.map(kaiju => {
        return <span style={{animation: '1s warning-flash infinite alternate'}}>⚠️{kaiju.name} seen in {random.city()}! {random.description()}⚠️</span>
      })
    // Otherwise create a single announcement about how there are no announcements
    } else {
      return <span>No kaiju sightings ... Stay tuned for more announcements ...</span>
    }
  }

  // This is a FUNCTIONAL component, we only need a return statement
  return (
    <div id='ticker-container'>

      <div>

        {renderSightings()}

      </div>

    </div>
  )
}

export default TickerContainer
