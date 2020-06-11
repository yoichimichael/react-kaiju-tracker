import React from 'react'
import * as requests from './requests'

class CreateSightingForm extends React.Component {
  
  state = {
    kaijuId: this.props.kaijuId,
    location: '',
    description: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state))
  };

  handleSubmit = (e) => {
    e.preventDefault()
    requests.postSighting(this.state)
    .then(sighting => {
      this.props.addSighting(sighting)
      this.setState({
        kaijuId: '',
        location: '',
        description: ''
      })
      this.props.toggleCreateSighting()
    })

  };

  render() {
    return (
      <form id='create-sighting-form' onSubmit={this.handleSubmit}>

        <label>Location: </label>
        <input name="location" value={this.state.location} onChange={this.handleChange} type='text' placeholder="add location..." />

        <label>Description: </label>
        <input name="description" value={this.state.description} onChange={this.handleChange} type='text-area' placeholder="add description..." />

        <br/>

        <input type='submit' value='Add Sighting' />

      </form>
    )
  }
}

export default CreateSightingForm;