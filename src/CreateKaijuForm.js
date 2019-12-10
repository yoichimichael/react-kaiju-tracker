import React, {useState} from 'react'

const CreateKaijuForm = ({createKaiju}) => {

  const [name, setName] = useState('')
  const [power, setPower] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    createKaiju({name, power, image})
    setName('')
    setPower('')
    setImage('')
  }

  return (
    <form id='create-kaiju-form' onSubmit={handleSubmit}>

      <label>Name: </label>
      <input type='text' value={name} placeholder="add your name here.." onChange={e => setName(e.target.value)} />

      <label>Power: </label>
      <input type='text' value={power} placeholder="add your power here..." onChange={e => setPower(e.target.value)} />

      <label>Image: </label>
      <input type='text' value={image} placeholder="add your image url here..." onChange={e => setImage(e.target.value)} />

      <br/>

      <input type='submit' value='Create Kaiju' />

    </form>
  )
}

export default CreateKaijuForm
