import React from 'react';

function InfoCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
            <h5 className='cards__item__sub'>{props.sub}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default InfoCardItem;
