import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Characters from '../Characters/Characters';

const Picker = () => {

    const [characters, setCharacters] = useState([]);
    const [squad, setSquad] = useState([]);

    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(json => setCharacters(json))
    }, [])

    const handleAddtoSquad = character => {
        const newSquad = [...squad, character]
        setSquad(newSquad)
        console.log(newSquad)
    }

    return (
        <div className='row'>
            <div className='col-lg-9'>
                <Characters handleAddtoSquad={handleAddtoSquad} characters={characters}/>
            </div>
            <div className='col-lg-3'>
                <Cart squad={squad}/>

            </div>

        </div>
    );
};

export default Picker;