import React from 'react';
import banner from '../../Resources/images/cover.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <img src={banner} alt="" className='w-100' height='300px'/>
            </div>

            <div className ='p-5'>
                <div>
                    <h1>Naruto Squad</h1>
                    <h2>Create your own Ninja Squad</h2>
                    <h3>Total HP: 300</h3>

                </div>
            </div>

        </div>
    );
};

export default Banner;