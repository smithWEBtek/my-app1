import React from 'react';
import './App.css';

function Welcome(props) {
  return (
    <div>
      <h3>Hello, {props.name}</h3>
        <Coffee size={props.size} />
    </div>
  )
} 

function Coffee(props){
  return (
  <p>we have a {props.size} coffee for you.</p>
  )
}

export function Composing() {
  return (
    <div>
      <div>
        <Welcome name="Sara" size="small" />
        <Welcome name="Cahal" size="medium" />
        <Welcome name="Edite" size="large" />
      </div>
    </div>
  );
}
 