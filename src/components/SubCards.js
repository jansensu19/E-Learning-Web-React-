import React from 'react'
import SubCardItem from './SubCardItem';
import "./SubCards.css"

function SubCards() {
  return (
    <div className='cards'>
      <h1>Subscription Fees & Benefits</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <SubCardItem
              title='1 Month Subscription (30 Days)'
              text='Rp 1,500,000'
              path='/webdeveloper'
            />
            <SubCardItem
              title='3 Month Subscription (90 Days)'
              text='Rp 4,500,000'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
          <SubCardItem
              title='6 Month Subscription (180 Days)'
              discount='Rp 9,000,000'
              text='Rp 8,100,000'
              path='/services'
            />
            <SubCardItem
              title='1 Year Subscription (365 Days)'
              discount='Rp 18,000,000'
              text='Rp 12,600,000'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
        );
}

export default SubCards;
