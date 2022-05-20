import React from 'react';

const Cart = (props) => {

    const cart = props.cart

    let total = cart.reduce((total, prd) =>
        total + prd.product.price, 0)
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
            <p>Total price :{ConvertNumber(total + taxVat + shippingCost)}</p>


        </div>
    );
};

export default Cart;