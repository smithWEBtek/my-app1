import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flap from './Flap';
import IceCream from './IceCream';
import registerServiceWorker from './registerServiceWorker';
 

ReactDOM.render(
  <App />, document.getElementById('root1'));
registerServiceWorker();

ReactDOM.render(
  <Flap />, document.getElementById('root2'));
registerServiceWorker();

ReactDOM.render(
  <IceCream />, document.getElementById('root3'));
registerServiceWorker();
