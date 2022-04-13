import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import OrderCard from '../Order-Card/OrderCard';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const removeItem = product => {
        console.log(product)
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='review-item-details'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='order-summary'>
                <OrderCard cart={cart}></OrderCard>
            </div>
        </div>
    );
};

export default Orders;