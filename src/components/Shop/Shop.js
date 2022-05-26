import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import ShopCart from '../Shop/ShopCart/ShopCart'
import { addToDatabaseCart } from '../../utilities/fakedatabaseManager';
import { getDatabaseCart } from '../../utilities/fakedatabaseManager';


const Shop = () => {

    const product10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);
    //console.log(cart)
    const handleAddProduct = (pd) => {
        const newCart = [...cart, pd]
        const product = pd
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length
        // console.log(count)
        addToDatabaseCart(product.key, count);
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




    return (
        <div className='shop-container'>

            <div className='product-container'>

                {product10.map((product) =>
                    <Product handleAddProduct={handleAddProduct} showAddToCart={true} product={product} key={product.key}></Product>
                )
                }
            </div>
            <div className='cart-container'>
               <ShopCart cart={cart}></ShopCart>

            </div>



        </div>
    );
};

export default Shop;