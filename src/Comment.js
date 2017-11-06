import React from 'react';
import './App.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt= "brad.png pic should be here..." />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
      <div>
        <p>You ordered a {props.order.size} coffee</p>
        <p>Your {props.order.food} will be ready soon.</p>
      </div>
    </div>
  );
}