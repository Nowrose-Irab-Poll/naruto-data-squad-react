import React from 'react';
import Character from '../Character/Character';
import  './Characters.css'

const Characters = (props) => {
    const {characters} = props;
    return (
        <>
            <h3 className='m-4'>Character List</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    characters.map(character => <Character character={character}/>)
                }
            </div>
        </>
    );
};

export default Characters;