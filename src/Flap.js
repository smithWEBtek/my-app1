import React, { Component } from 'react';
import './App.css';

const shoes = React.createElement('h3', {size: 'YOOGE!', state: 'clean'}, "my shoes are blue");

const theDOM = React.createElement('h5', {lastName: 'fuggeddaboudit!', state: 'NY'}, "who you lookin at?");
 
const title = React.createElement('h2', {color: 'blue', size: 'medium'}, ['My First React Code', theDOM, shoes]);

const content = React.createElement('h3', {city: 'Boston', state: 'MA'}, "...and this is where I live...");

const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');

const container = React.createElement('div',{}, [title, paragraph, theDOM, shoes]);

class Flap extends Component {
  render() {
    return (
      <div className="App">        
        <p>{title}</p>
        <em><strong>{title.props.color}</strong></em>
        <p>{title.props.size}</p>
        <p>{content}</p>
        <p>{content.props.city}, {content.props.state}</p>
        <p>{shoes.props.size}</p>
        <p>{container}</p>
      </div>
    );
  }
}

export default Flap;