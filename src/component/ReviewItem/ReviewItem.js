import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, removeItem } = props;
    const { name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" srcset="" />
            <div className='rapper'>
                <div className='review-info'>
                    <h3 title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </h3>
                    <h5>Price : $ {price}</h5>
                    <h5>Shipping Charge : {shipping}</h5>
                    <h5>Quantity : {quantity}</h5>
                </div>
                <div className='delete-button'>
                    <button onClick={() => removeItem(product)} className='delete' ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;