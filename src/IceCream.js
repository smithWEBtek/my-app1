import React, { Component }from 'react';
import './App.css';
 
const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {id: 1, className: 'dessert', color: 'brown'}, 'Chocolate'),
        React.createElement('li', {id: 2, className: 'spice', color: 'white'}, 'Vanilla'),
        React.createElement('li', {id: 3, className: 'fruit', color: 'yellow'}, 'Banana')
      ]
    )
  );

class IceCream extends Component {
  render() {
    return(
      <div className='App'>
        {list}
      </div>
    )
  }
}

export default IceCream;
 
