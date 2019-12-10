// React
import React from 'react'
// Randomizer
import random from './random'

const TickerContainer = ({kaijus}) => {


  const renderSightings = () => {
    if (kaijus.length) {
      return kaijus.map(kaiju => {
        return <span>{kaiju.name} seen in {random.city()}! {random.description}</span>
      })
    } else {
      return <span>No kaiju sighted ... Stay alert for more announcements ...</span>
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
