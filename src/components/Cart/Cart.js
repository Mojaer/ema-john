import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart
    const price= cart.product.map((pd)=>pd.price)
    const quantity= cart.product.map(((pd)=>pd.quantity))
    // quantity.forEach((value)=>console.log(typeof(value)))


    let total=0;
    for (let i = 0; i <cart.product.length; i++) {
         total += price[i]*quantity[i];
        
    }

    // let total = price.reduce((total, prd) =>
    //     total + prd * quantity.forEach((value)=>{return value}),0) ;

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
            <p>item Ordered:{cart.product.length}</p>
            <p>Product price :{ConvertNumber(total)} $ </p>
            <p> <small>shipping cost:{shippingCost}</small> </p>
            <p> <small>Tax + Vat :{ConvertNumber(taxVat)}</small> </p>
            <p className='totalPrice'>Total price :{ConvertNumber(total + taxVat + shippingCost)}</p>
            <br />
           
           



        </div>
    );
};

export default Cart;