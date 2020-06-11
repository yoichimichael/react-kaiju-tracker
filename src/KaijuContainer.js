//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    sightings: [],
    showForm: false,
  }

  componentDidMount(){
    requests.fetchKaijus()
      .then(kaijus => this.setState({ kaijus }))
    requests.fetchSightings()
      .then(sightings => this.setState({ sightings }))
  }

  showForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  };

  addKaiju = (kaiju) => {
    const newArray = this.state.kaijus.concat([kaiju])
    this.setState({
      kaijus: newArray
    })
  };

  editKaiju = (kaijuObj) => {
    let kaijus = [...this.state.kaijus]
    const kaijuIdx = kaijus.findIndex((kaiju => kaiju.id === kaijuObj.id))
    kaijus[kaijuIdx] = kaijuObj
    this.setState({ kaijus })
  };

  deleteKaiju = (kaijuId) => {
    let kaijus = [...this.state.kaijus]
    const kaijuIdx = kaijus.findIndex((kaiju => kaiju.id === kaijuId))
    kaijus.splice(kaijuIdx, 1)
    this.setState({ kaijus })
  };

  findSightings = (kaijuId) => {
    return (
      this.state.sightings.filter(sighting => (
        sighting.kaijuId === kaijuId
      ))
    )
  };

  addSighting = (sighting) => {
    const newArray = [...this.state.sightings.concat([sighting])]
    this.setState({
      sightings: newArray
    })
  };

  render() {
    // console.log(this.findSightings(1))
    return (
      <>
        <button onClick={this.showForm}>
          {this.state.showForm ? "Hide Form" : "Create Kaiju"}
        </button>
        {this.state.showForm? <CreateKaijuForm addKaiju={this.addKaiju}/> : null }

        <div id='kaiju-container'>
          {this.state.kaijus.map(kaiju => (
            <KaijuCard 
              key={kaiju.id} 
              {...kaiju}
              editKaiju={this.editKaiju} 
              deleteKaiju={this.deleteKaiju}
              findSightings={this.findSightings}
              addSighting={this.addSighting}
            />
          ))}
        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
