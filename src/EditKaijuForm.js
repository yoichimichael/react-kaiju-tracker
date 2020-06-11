import React from 'react'
import * as requests from './requests'


class EditKaijuForm extends React.Component {

  state = {
    name: this.props.name,
    power: this.props.power,
    image: this.props.image
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    requests.editKaiju(this.props.id, this.state)
    .then(kaiju => {
      this.props.editKaiju(kaiju)
      this.props.toggleEdit()
    })
  };

  handleClick = () => {
    requests.deleteKaiju(this.props.id)
    this.props.deleteKaiju(this.props.id)
  };

  render() {
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.handleSubmit}>

          <label>Name: </label>
          <input type='text' name="name" value={this.state.name} onChange={this.handleChange}/>
          <br/>

          <label>Power: </label>
          <input type='text' name="power" value={this.state.power}onChange={this.handleChange}/>
          <br/>

          <label>Image URL: </label>
          <input type='text' name="image" value={this.state.image} onChange={this.handleChange}/>
          <br/>

          <input type="submit" value="Save Changes" />
          
          <button onClick={this.handleClick}>Delete Kaiju</button>
        </form>
        
      </>
    )
  }
}

export default EditKaijuForm
