import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron.js';
import Form from './Form.js';
import Card from './Card.js';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor(props) {
    super(props);

    this.state = {
      vehicles: []
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((data) => {
      return data.json();
    }).then((data) => {
      this.setState({vehicles: data.results});
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    // let formData = {value: this.state.value, pilot: this.state.pilot};
    let vehicles = this.state.vehicles;
    let view = vehicles.map((vehicle, index) => {
      return (
        <div className='card' key={index}>
          <Card vehicle={vehicle}/>
        </div>
      )
    })


    return (
      <div className="App">
        <Jumbotron />
        <Form />
        <div className='card-deck'>
         {view}
        </div>
      </div>
    );
  }
}

export default App;
