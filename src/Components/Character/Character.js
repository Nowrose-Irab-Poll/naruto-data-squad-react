import React from 'react';

const Character = (props) => {
    const {name, img, hp, classification,sex, naturetypes} = props.character;
    console.log(img);
    return (
        <div className='col'>
            <div className="card h-100">
            
                <img src={img} className='card-img-top rounded-circle w-50 mx-auto' alt='...'></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{sex}</small></p>
                    <p className="card-text">Classification: {'    '}
                        {
                            classification.map( type =><span class="badge bg-primary mx-1">{type}</span>)
                        }
                    </p>
                    <p className="card-text">Nature Types: 
                        {
                            naturetypes.map( type =><span class="badge bg-secondary m-1">{type}</span>)
                        }
                    </p>
                </div>
                <div className="card-footer">
                    <h5>HP: {hp}</h5>
                    <button className='btn btn-primary'>Add to Squad</button>
                </div>


            </div>
        </div>
        
    );
};


export default Character;