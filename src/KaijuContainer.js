//React
import React, {useState, useEffect} from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'

const KaijuContainer = () => {

  const [kaijus, setKaijus] = useState([])

  useEffect(() => {
    requests.getKaijus()
    .then(data => setKaijus(data))
  }, [])

  const editKaiju = newKaiju => {
    const i = kaijus.indexOf(kaijus.find(k => k.id === newKaiju.id))
    const newKaijus = [...kaijus]

    requests.editKaiju(newKaiju)
    .then(data => {
      newKaijus.splice(i, 1, data)
      setKaijus(newKaijus)
    })
  }

  const deleteKaiju = id => {
    requests.deleteKaiju(id).then(res => {
      const newKaijus = [...kaijus]
      setKaijus(newKaijus.filter(k => k.id !== id))
    })
  }

  const createKaiju = body => {
    requests.createKaiju(body)
    .then(res => {
      console.log(res)
      const newKaijus = [...kaijus]
      newKaijus.push(res)
      setKaijus(newKaijus)
    })
  }

  const renderKaijuCards = () => {
    return kaijus.map(kaiju => <KaijuCard key={kaiju.id} {...{kaiju, editKaiju, deleteKaiju}} />)
  }

  return (
    <>
      <CreateKaijuForm createKaiju={createKaiju} />

      <div id='kaiju-container'>


        {renderKaijuCards()}

      </div>

      <TickerContainer {...{kaijus}} />
    </>
  )
}

export default KaijuContainer
