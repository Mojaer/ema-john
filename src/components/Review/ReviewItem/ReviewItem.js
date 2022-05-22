import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity } = props.product;
    const reviewStyle ={
        borderBottom: '1px solid gray',
        marginBottom: '20px',
        paddingBottom: '5px',
        margin:'50px'
    }
    return (
        <div  style={reviewStyle}>
            <h5>{name}</h5>
            <p>Quantity: {quantity}</p>
            <br />
            <button className='main-btn'>Remove</button>

        </div>
    );
};

export default ReviewItem;