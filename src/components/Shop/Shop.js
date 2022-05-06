import React from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const product10 = fakeData.slice(0,10);
    return (
        <div className='shop-container'>

            <div className='product-container'>
            
               { product10.map((product)=>
                    <Product product={product}></Product>
                        )
                }
            </div>
            <div className='cart-conatiner'>
                <h3>container</h3>
                
            </div>

           
           
        </div>
    );
};

export default Shop;