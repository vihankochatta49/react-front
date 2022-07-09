import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
           <div id="imagebox">
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
        </div>
          <div className='cards__item__title'> {props.title} </div>
            <div className='cards__item__text'>{props.text}</div>
        
       
      </li>
    </>
  );
}

export default CardItem;