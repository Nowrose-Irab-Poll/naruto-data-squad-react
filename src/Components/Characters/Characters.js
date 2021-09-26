import React from 'react';
import Character from '../Character/Character';
import  './Characters.css'

const Characters = (props) => {
    const {characters, handleAddtoSquad} = props;


    return (
        <>
            <h2 className='m-4'>Character List</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    characters.map(character => <Character 
                        handleAddtoSquad={handleAddtoSquad} 
                        key={character.id} 
                        character={character}
                        />)
                }
            </div>
        </>
    );
};

export default Characters;