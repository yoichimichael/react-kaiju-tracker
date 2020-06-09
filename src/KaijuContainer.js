//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

const kaijusPromise = requests.fetchKaijus()

class KaijuContainer extends React.Component {

  state = {
    kaijus: []
  }

  componentDidMount(){
    kaijusPromise
      .then(kaijus => { 
        this.setState({ kaijus })
      })
  }

  render() {
    return (
      <>

        <CreateKaijuForm />

        <div id='kaiju-container'>
          {this.state.kaijus.map(kaiju => <KaijuCard  key={kaiju.id} {...kaiju}/>)}
          {/* Kaiju cards should go in here! */}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
