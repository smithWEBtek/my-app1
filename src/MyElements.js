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

function element3(props){
  return(
    <div>
      <hr /> 
      <p>{props.firstName} {props.lastName}</p>
    </div>
  )
};

export function Welcome(props) {
  return( 
    <div>
      <hr />
        <h3>Hello {props.firstName}, we will have a {props.size} coffee for you.</h3>
      <hr />
    </div>
  )
};

function CoffeeOrder(props){
  return (
    <div>
      <hr />
      <p>My name is {props.firstName}, and I'll take a {props.size} coffee, please.</p>
    </div>
  )
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

export class Element3 extends Component {
  render(){
    return(
      Welcome(this.props)
    )  
  }
}

export class Element4 extends Component {
  render(){
    return(
      <div>
        <hr />
          <button>Small</button>
          <button>Medium</button>
          <button>Large</button>
      </div>
    )  
  }
}
