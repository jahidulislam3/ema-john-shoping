import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
const Products = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='name'>{name}</h3>
                <h3 className='price'>Price : ${price}</h3>
            </div>
            <div className='seller'>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button onClick={() => props.addToCard(props.product)} className='cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;