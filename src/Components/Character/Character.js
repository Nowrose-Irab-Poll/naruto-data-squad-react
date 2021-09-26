import React from 'react';

const Character = (props) => {
    const {name, img, hp, classification,sex, naturetypes} = props.character;
    const handleAddtoSquad = props.handleAddtoSquad;
    return (
        <div className='col'>
            <div className="card h-100 shadow ">
            
                <img src={img} className='card-img-top rounded-circle w-50 mx-auto' alt='...'></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{sex}</small></p>
                    <p className='card-text d-inline'>Classification: </p>
                    {
                        classification.map( (type, index) => <li key={index} className="d-inline badge bg-primary mx-1">{type}</li>)
                    }

                    <p className="card-text">Nature Types: 
                        {
                            naturetypes.map( (type, index) => <span key={index} className="badge bg-secondary mx-1">{type}</span>)
                        }
                    </p>
                </div>
                <div className="card-footer">
                    <h5>HP: {hp}</h5>
                    <button onClick={()=>handleAddtoSquad(props.character)} className='btn btn-primary'>Add to Squad</button>
                </div>


            </div>
        </div>
        
    );
};


export default Character;