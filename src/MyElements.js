import React, { Component } from 'react';
import './App.css';

// functions and variables to use in JSX elements further below:
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

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

const element1 = (
  <div>
    <hr />
    <p>Hello, {formatName(user)}</p>
    <p>Today's date is: {currentDate}</p>
    <p>Current time is: {currentTime}</p>
  </div>
);

//JSX elements, export each to 'index.js'
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
      element1
    )  
  }
}

export class Element3 extends Component {
  render(){
    return(
      element1
    )  
  }
}
