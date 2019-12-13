import React from 'react'

const TickerContainer = ({kaijus}) => {

  const sightings = [
    {
      "id": 1,
      "kaijuId": 1,
      "location": "Tokyo",
      "description": "Oh no! There goes Tokyo!",
      "time": "Fri Nov 29 2019 11:17:54 GMT-0500 (Eastern Standard Time)"
    }
  ]

  const renderSightings = () => {
    return sightings.map(sighting => {
      const kaiju = kaijus.find(k => k.id === sighting.kaijuId)
      if (kaiju) {
        return <span>{kaiju.name} seen in {sighting.location}! {sighting.description}</span>
      }
      return <span>Loading...</span>
    })
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
