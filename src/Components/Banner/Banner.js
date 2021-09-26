import React from 'react';
import banner from '../../Resources/images/cover.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='d-flex p-5'>
            <div className='banner w-50'>
                <div className=''>
                    <h1>Naruto Squad</h1>
                    <h2>Create your own Ninja Squad</h2>
                    <h2>Total HP: 300</h2>

                </div>
            </div>
            <div>
                <img src={banner} alt="" className='w-50'/>
            </div>

        </div>
    );
};

export default Banner;