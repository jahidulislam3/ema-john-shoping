import React from 'react';
import { Link } from 'react-router-dom';
import './OrderCard.css'
const OrderCard = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='ordercart'>
            <h2>Order Summary</h2>
            <div className='order-details'>
                <p> Selected Items : {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: $ {shipping} </p>
                <p>Tax: $ {tax}</p>
                <h3>Grand Total: $ {grandTotal.toFixed(2)} </h3>
                <Link className='proceed' to="/inventory">Proceed CheckOut</Link>
            </div>
        </div>
    );
};

export default OrderCard;