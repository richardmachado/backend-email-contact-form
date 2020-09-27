import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';


export default class App2 extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
      
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit} style ={{width:'600px'}}>
      <FormGroup>
        <Label for="name">
          <Input 
            type="text"
            name="name"
            onChange={this.handleChange} />
          Name:
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="email">
          <Input 
            type="text"
            name="email"
            onChange={this.handleChange} />
          Email:
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="message">
          <Input 
            type="textarea"
            name="message"
            onChange={this.handleChange} />
          Message:
        </Label>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
                
            </div>
        )
    }
}
