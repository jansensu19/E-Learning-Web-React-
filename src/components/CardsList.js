import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className="title_card">
        <h1>Learning Path</h1>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/webdeveloper.jpg'
              text='Explore and Build your web in the world of Web Design and Development'
              label='Web Developer'
              path='/webdeveloper'
            />
            <CardItem
              src='images/softwaredeveloper.jpg'
              text='Learn and Build you own software to the next level'
              label='Software Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/webdeveloper.jpg'
              text='Explore and Build your web in the world of Web Design and Development'
              label='Web Developer'
              path='/services'
            />
            <CardItem
              src='images/softwaredeveloper.jpg'
              text='Learn and Build you own software to the next level'
              label='Software Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/webdeveloper.jpg'
              text='Explore and Build your web in the world of Web Design and Development'
              label='Web Developer'
              path='/services'
            />
            <CardItem
              src='images/softwaredeveloper.jpg'
              text='Learn and Build you own software to the next level'
              label='Software Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
            <CardItem
              src='images/mobiledeveloper.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Mobile Developer'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
