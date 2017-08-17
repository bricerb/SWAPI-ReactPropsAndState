import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      pilot: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({pilot: this.state.value, value: ''});
  }

  render() {
    return (
      <div className='card'>
        <div className='card-block form'>
          <h4 className="card-title">What is your name pilot?</h4>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='name' value={this.state.value} onChange={this.handleChange} placeholder='Enter Pilot Name' />
            <input type='submit' className="btn btn-primary" value='Submit'/>
          </form>
          <h1 className="card-text">{this.state.pilot}</h1>
        </div>
      </div>
    )
  }
}
