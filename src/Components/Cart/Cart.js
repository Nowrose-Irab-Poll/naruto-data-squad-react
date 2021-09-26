import React from 'react';

const Cart = (props) => {
    
    const {squad} = props;

    const totalHP = squad.reduce((previous, current)=> previous+=current.hp, 0)

    return (
        <div>
            <h5>Total characters: {squad.length}</h5>
            <h5>Total HP: {totalHP}</h5>
            <h3>Cart</h3>
            <ul>
                {
                    squad.map(character => <li>{character.name}</li>)
                }
            </ul>            
        </div>
    );
};

export default Cart;