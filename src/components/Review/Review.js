import fakeData from '../../fakeData'
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedatabaseManager';
import ReviewItem from './ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [reviewCart, setCart] = useState([]);

    const removeFromCart = (key) => {
        const newCart = reviewCart.filter(product => product.key !== key);
        setCart(newCart);

        removeFromDatabaseCart(key);
    }

    //console.log(reviewCart)

    useEffect(() => {
        const addedProduct = getDatabaseCart();
        const productkey = Object.keys(addedProduct);
        const reviewedCart = productkey.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = addedProduct[key];
            return product;

        });

        setCart(reviewedCart);

    }, [])

    const cart = [];
    cart.product=reviewCart;


    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1 style={{ textAlign: 'center' }}> Cart Item:{reviewCart.length}</h1>
                {
                    reviewCart.map(cartItem => <ReviewItem product={cartItem} key={cartItem.key} removefromcart={removeFromCart}></ReviewItem>)
                }
            </div>
            <div className='Cart-container'>
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Review;