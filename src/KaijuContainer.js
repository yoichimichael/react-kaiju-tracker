//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// READ the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: []
  }

  render() {
    return (
      <>

        <CreateKaijuForm />

        <div id='kaiju-container'>
          {/* Kaiju cards should go in here! */}
        </div>

        {/* Just pass kaijus to this and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />

      </>
    )

  }
}

export default KaijuContainer
