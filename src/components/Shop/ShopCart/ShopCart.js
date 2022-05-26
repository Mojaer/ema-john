import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Cart/Cart.css';

const Cart = (props) => {

    const cart = props.cart
    // console.log(cart)

    const price = cart.map((pd) => {
        return pd.price * (pd.quantity || 1);
    })

    let total = 0
    price.forEach((pd) => total += pd)

    
    //    console.log(total);


    let shippingCost = 0

    if (total > 1000) {
        shippingCost = 0;
    }
    else if (total > 500) {
        shippingCost = 5;
    }
    else if (total > 0) {
        shippingCost = 10;
    }

    let taxVat = total / 10;

    const ConvertNumber = (num) => {
        let finalNum = Number(num.toFixed(2))
        return finalNum;
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>item Ordered:{cart.length}</p>
            <p>Product price :{ConvertNumber(total)} $ </p>
            <p> <small>shipping cost:{shippingCost}</small> </p>
            <p> <small>Tax + Vat :{ConvertNumber(taxVat)}</small> </p>
            <p className='totalPrice'>Total price :{ConvertNumber(total + taxVat + shippingCost)}</p>
            <br />
            <NavLink to='/review'> <button className='main-btn' > Review Order</button></NavLink>





        </div>
    );
};

export default Cart;