import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    // console.log(props.handleAddProduct)
    const { name, seller, stock, img, price,key } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt={name} />
            </div>
            <div className='description'>
                <h4 className='product-name'> <Link to={'/product/'+key}>{name}</Link> </h4>
                <br />
                <p><small>by:{seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock </small></p>
                {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props)} className='main-btn'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
                
            </div>



        </div>
    );
};

export default Product;