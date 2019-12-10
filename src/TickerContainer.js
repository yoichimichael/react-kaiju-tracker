// React
import React from 'react'
// Randomizer
import random from './random'

const TickerContainer = ({kaijus}) => {

  const renderSightings = () => {
    if (kaijus.length) {
      return kaijus.map(kaiju => {
        return <span style={{animation: '1s warning-flash infinite alternate'}}>⚠️{kaiju.name} seen in {random.city()}! {random.description()}⚠️</span>
      })
    } else {
      return <span>No kaiju sightings ... Stay tuned for more announcements ...</span>
    }
  }

  return (
    <div id='ticker-container'>

      <div>

        {renderSightings()}

      </div>

    </div>
  )
}

export default TickerContainer
