import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {squad} = props;

    const totalHP = squad.reduce((previous, current)=> previous+=current.hp, 0)

    return (
        <div className='m-5 p-3 cart-color rounded'>
            <h5>Total characters: {squad.length}</h5>
            <h5>Total HP: {totalHP}</h5>
            <h3>Cart</h3>
            <ol>
                {
                    squad.map(character => <li>{character.name}</li>)
                }
            </ol>            
        </div>
    );
};

export default Cart;