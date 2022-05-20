import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';


const Shop = () => {

    const product10 = fakeData.slice(0, 10);
    const [cart,setCart] = useState([]);
    //console.log(cart)
    const handleAddProduct = (pd) => {      
        const newCart = [...cart,pd]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>

                {product10.map((product) =>
                    <Product handleAddProduct={handleAddProduct} showAddToCart={true} product={product}></Product>
                )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>



        </div>
    );
};

export default Shop;