import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Composing } from './Composing'
import { Comment } from './Comment'
import UserCard from './UserCard'
import {users} from './Arrays';

ReactDOM.render(
  <App 
  />, 
  document.getElementById('root1')
);

ReactDOM.render(
  <Composing
  />, 
  document.getElementById('root2')
); 
 
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  },
  order: {
    size: 'medium',
    food: 'kibbles'
  }
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
    order={comment.order}
    />,
  document.getElementById('root3')
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
    document.getElementById('root4')
  )
)}
)}

showUsers();