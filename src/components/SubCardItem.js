import React from 'react';
import { Link } from 'react-router-dom';

function SubCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__title'>{props.title}</h5>
            <p className='cards__item__discount'>{props.discount}</p>
            <p className='cards__item__subtext'>{props.text}</p>
            <button className='cards__item__button'>Subscribe</button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SubCardItem;
