import React from 'react'

class CreateKaijuForm extends React.Component {

  render() {
    return (
      <form id='create-kaiju-form'>

        <label>Name: </label>
        <input type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
