import fakeData from '../../fakeData'
import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/fakedatabaseManager';
import ReviewItem from './ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
   
    useEffect(() => {
        const addedProduct = getDatabaseCart();
        const productkey = Object.keys(addedProduct);
        const reviewedCart = productkey.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = addedProduct[key];
            return product;

        });

        setCart(reviewedCart);

    },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> cart Item:{cart.length}</h1>
            {
                cart.map(cartItem =><ReviewItem product={cartItem} key={cartItem.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;