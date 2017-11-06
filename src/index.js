import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {users} from './Arrays';
import { UserCard } from './UserCard';

ReactDOM.render(
  <App 
  />, 
  document.getElementById('root1')
);
 
function showUsers(){
  users.map((user, i) => {
  return(
    ReactDOM.render(
      <UserCard
        firstName={user.firstName}
        lastName={user.lastName}
        favoriteColor={user.favoriteColor}
        favoriteAnimal={user.favoriteAnimal}
        age={user.age}
        hometown={user.hometown}
        />,
      document.getElementById(`user${i}`)
    )
  )}
)}

showUsers();