import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here to cater for any event type</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpeg'
              text=''
              label='Corporate'
            //   path='/services'
            />
            <CardItem
              src='images/img-3.jpeg'
              text=''
              label='Birthday'
            //   path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpeg'
              text=''
              label='Wedding'
            //   path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;