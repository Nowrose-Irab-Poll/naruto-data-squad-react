import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Characters from '../Characters/Characters';

const Picker = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(json => setCharacters(json))
    }, [])

    return (
        <div className='row'>
            <div className='col-9'>
                <Characters characters={characters}/>
            </div>
            <div className='col-3'>
                <Cart/>

            </div>

        </div>
    );
};

export default Picker;