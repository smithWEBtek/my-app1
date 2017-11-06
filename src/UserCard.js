import React, { Component } from 'react';
import './App.css';

export class UserCard extends Component {
  render(){
  return (
    <div>
      <hr />
      <h3>{this.props.firstName} {this.props.lastName}</h3>
      <p>Color: {this.props.favoriteColor}</p>
      <p>Animal: {this.props.favoriteAnimal}</p>
      <p>Age: {this.props.age}</p>
      <p>Hometown: {this.props.hometown}</p>
    </div>
    );
  }
};
