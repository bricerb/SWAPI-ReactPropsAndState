import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    let vehicle = this.props.vehicle;

    return (
      <div className="card-block">
        <h4 className="card-title">Vehicle: {vehicle.name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
        <hr />
        <h6 className="card-subtitle mb-2 text-muted">Spec</h6>
        <hr />
        <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
        <hr />
        <p className="card-text">Class: {vehicle.vehicle_class}</p>
        <hr />
        <p className="card-text">Passengers: {vehicle.passengers}</p>
        <hr />
        <p className="card-text">Crew: {vehicle.crew}</p>
        <hr />
        <p className="card-text">Length: {vehicle.length}</p>
        <hr />
        <p className="card-text">Max Speed: {vehicle.max_atmosphering_speed}</p>
        <hr />
        <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
      </div>
    )
  }
}
