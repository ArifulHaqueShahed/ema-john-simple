import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const { name, quantity, key, price } = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewStyle}>
            <h4 className="product-name">{name}</h4>
            <p style={{ fontWeight: '900' }}>Quantity : {quantity}</p>
            <p><small> ${price}</small></p>
            <button
                onClick={() => props.removeProduct(key)}
                className="main-button"
            >Remove</button>
        </div>
    );
};

export default ReviewItem;