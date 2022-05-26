import React from 'react';

const ReviewItem = (props) => {
    // console.log(props)
    const { name, quantity,key } = props.product;
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
            <button onClick={()=>props.removefromcart(key)} className='main-btn'>Remove</button>

        </div>
    );
};

export default ReviewItem;