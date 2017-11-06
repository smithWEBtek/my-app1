////////////////////////////////////////////////////////////
//import needed classes from node_modules, or 
import React, { Component } from 'react';
import './App.css';



////////////////////////////////////////////////////////////
// const variables and function to use in JSX elements below:
const user = {
  firstName: "Brad",
  lastName: "Smith"
}

const timeInfo = {
  date: new Date().toDateString(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
}

const currentTime = timeInfo.hours + 'hours:' + timeInfo.minutes + 'minutes'

const dateInfo = {
  year: new Date().getFullYear(),
  month: new Date().getMonth()+1,
  day: new Date().getDate()
}

const currentDate = dateInfo.year + '/' + dateInfo.month + '/' + dateInfo.day


const fullName = user.firstName + ' ' + user.lastName


function formatName1(user) {
  return user.firstName + ' ' + user.lastName;
}

/////////////////////////////////////////////////
// variables using JSX markup, combined with JavaScript variables and functions declared above

const element1 = (
  <div>
    <hr />
    <p>Hello, {formatName1(user)}</p>
    <p>Today's date is: {currentDate}</p>
    <p>Current time is: {currentTime}</p>
  </div>
);

const element2 = (
  <div>
    <hr />
    <div className="section">
      <p>This is something different</p>
    </div>
  </div>
);
const element3 = (
  <div>
    <hr /> 
    <p>{fullName}</p>
  </div>
);

export function Welcome(props) {
  if(props.fontsize === "large"){
    return(
      <div>
        <hr />
          <h1>Hello large {props.name.toUpperCase()}</h1>
        <hr />
      </div>
    )
  } else 
  if (props.fontsize === "medium"){
    return(
      <div>
        <hr />
         <h3>Hello medium {props.name}</h3>
        <hr />
      </div>
    )
  } else 
  if (props.fontsize === "small"){
    return(
      <div>
        <hr />
        <h3>Hello small {props.name.toLowerCase()}</h3>
        <hr />
      </div>
    )
  }
};


////////////////////////////////////////////////////////////
//JSX elements, may use variables and functions declared above, with {} to evaluate at compilation.
// export each JSX element to 'index.js'
// import the exported elements in a list { } in index.js
// ex: import { Element1, Element2, Element3 } from './MyElements';

export class Element1 extends Component {
  render(){
    return(
      element1
    )  
  }
}

export class Element2 extends Component {
  render(){
    return(
      element2
    )  
  }
}

export class Element4 extends Component {
  render(){
    return(
      <div>
        <button>Small</button>
        <button>Medium</button>
        <button>Large</button>
      </div>
    )  
  }
}
