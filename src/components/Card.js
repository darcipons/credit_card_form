import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div>
      <div>{props.input.cardNumber}</div>
      <div>{props.input.cardName}</div>
    </div>
  );
}

export default Card;
