import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,crs) => total + crs.price,0);
    return (
        <div className="cartDiv">
            <h1>Total Courses in Cart:</h1>
                <h3>Course Count : {cart.length}</h3>
                <h5>Total Price: {totalPrice.toFixed(2)}</h5>
               
                
        </div>
    );
};

export default Cart;