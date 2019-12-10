//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'

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


        <TickerContainer kaijus={this.state.kaijus} />

      </>
    )

  }
}

export default KaijuContainer
