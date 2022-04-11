import React, { useEffect, useState } from 'react';
import useProduct from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import OrderCard from '../Order-Card/OrderCard';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }

        }
        setCart(saveCart);
    }, [products])

    const addToCard = (selectedProducts) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProducts.id);
        if (exists) {
            const resat = cart.filter(product => product.id !== selectedProducts.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...resat, exists];
        }
        else {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }
        setCart(newCart);
        addToDb(selectedProducts.id);
    }
    return (
        <div className='shop-container'>
            <div className='card-details'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Products>)
                }
            </div>
            <div className='order-summary'>
                <OrderCard cart={cart}></OrderCard>
            </div>
        </div>
    );
};

export default Shop;