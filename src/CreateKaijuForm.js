import React from 'react'
import * as requests from './requests'

class CreateKaijuForm extends React.Component {
  
  state = {
    name: '',
    power: '',
    image: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    requests.postKaiju(this.state)
    .then(kaiju => {
      this.props.addKaiju(kaiju)
      this.setState({
        name: '',
        power: '',
        image: ''
      })
    })

  };

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={this.handleSubmit}>

        <label>Name: </label>
        <input name="name" value={this.state.name} onChange={this.handleChange} type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input name="power" value={this.state.power} onChange={this.handleChange} type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input name="image" value={this.state.image} onChange={this.handleChange} type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
