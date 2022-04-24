import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { ButtonLearn } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Digital Learning Experience!</h1>
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
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/fullstackweb.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Full Stack Web Developer'
              path='/services'
            />
            <CardItem
              src='images/androiddeveloper.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Android Developer'
              path='/sign-up'
            />
            <CardItem
              src='images/iosdeveloper.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='IOS Developer'
              path='/sign-up'
            />
          </ul>
        </div>
        <ButtonLearn className='btn-learn' buttonStyle='btn--more' buttonSize='btn--moreonly'>More <i class="fas fa-angle-double-right"></i></ButtonLearn>
      </div>
    </div>
  );
}

export default Cards;
