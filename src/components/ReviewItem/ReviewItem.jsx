import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({product, handleRemoveCart}) => {
  const {id, img, price, name, quantity} = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className='review-item-info'>
        <h4>{name}</h4>
        <p>Price: <span className='orange-text'>${price}</span></p>
        <p>Quantity: <span className='orange-text'>{quantity}</span></p>
      </div>
      <button onClick={()=>handleRemoveCart(id)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button> 
    </div>
  );
};

export default ReviewItem;