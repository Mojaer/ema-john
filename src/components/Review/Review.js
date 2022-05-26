import fakeData from '../../fakeData'
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedatabaseManager';
import ReviewItem from './ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyimage from '../../images/giphy.gif'

const Review = () => {
    const [reviewCart, setCart] = useState([]);

    const removeFromCart = (key) => {
        const newCart = reviewCart.filter(product => product.key !== key);
        setCart(newCart);

        removeFromDatabaseCart(key);
    }

    const [orderPlaced, setOrderPlaced] = useState(false);

    const orderPlaceHandler = () => {
        setCart([]);
        processOrder();
        setOrderPlaced(true);
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
    cart.product = reviewCart;


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {orderPlaced && <img src={happyimage} alt='' />}
                {orderPlaced || <h1 style={{ textAlign: 'center' }}> Cart Item:{reviewCart.length}</h1>}
                {
                    reviewCart.map(cartItem => <ReviewItem product={cartItem} key={cartItem.key} removefromcart={removeFromCart}></ReviewItem>)
                }
            </div>
            {orderPlaced || <div className='Cart-container'>
                <Cart orderplacehandler={orderPlaceHandler} cart={cart}></Cart>

            </div>}

        </div>
    );
};

export default Review;