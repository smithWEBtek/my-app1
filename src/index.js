import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Flap from './Flap';
// import IceCream from './IceCream';
import { Element1, Element2, Element3, Welcome, Element4 } from './MyElements';

ReactDOM.render(
  <App />, document.getElementById('root0'));

// ReactDOM.render(
//   <Flap />, document.getElementById('root2'));
 
// ReactDOM.render(
//   <IceCream />, document.getElementById('root3'));
 

ReactDOM.render(
  <Element1 
  />, 
  document.getElementById('root1')
);
 
ReactDOM.render(
  <Element2
  />, 
  document.getElementById('root2')
);

ReactDOM.render(
  <CoffeeOrder
    firstName='Sara'
    size="small"
  />, 
  document.getElementById('root3')
);

ReactDOM.render(
  <Element4
  />, 
  document.getElementById('root4')
);

ReactDOM.render(
  <Element3 
    firstName='Jacob'
    lastName='Worthington'
    size='large'
  />,
  document.getElementById('root5')
)

ReactDOM.render(
  <Welcome 
    firstName='Paul'
    lastName='Jacoby'
    size='medium'
  />,
  document.getElementById('root6')
)