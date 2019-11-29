// React
import React, {useState} from 'react'

const EditKaijuForm = ({kaiju, editKaiju, deleteKaiju}) => {

  const [nameInput, setNameInput] = useState(kaiju.name)
  const [powerInput, setPowerInput] = useState(kaiju.power)
  const [imageInput, setImageInput] = useState(kaiju.image)

  const handleNameInput = e => setNameInput(e.target.value)
  const handlePowerInput = e => setPowerInput(e.target.value)
  const handleImageInput = e => setImageInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    editKaiju({id: kaiju.id, name: nameInput, power: powerInput, image: imageInput})
  }

  const handleDelete = e => {
    deleteKaiju(kaiju.id)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='kaiju-card-edit-form'>

        <label>Name: </label>
        <input type='text' value={nameInput} onChange={handleNameInput} />
        <br/>

        <label>Power: </label>
        <input type='text' value={powerInput} onChange={handlePowerInput} />
        <br/>

        <label>Image URL: </label>
        <input type='text' value={imageInput} onChange={handleImageInput} />
        <br/>

        <input type="submit" value="Save Changes" />

      </form>

      <button className='kaiju-card-delete-button' onClick={handleDelete}>Delete</button>
    </>
  )
}

export default EditKaijuForm
