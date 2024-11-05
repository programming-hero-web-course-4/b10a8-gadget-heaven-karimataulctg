import React from 'react';
import imgBanner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='mb-52'>
        <div className='bg-[#9538E2] relative text-center flex flex-col justify-center items-center gap-y-6 pb-52 rounded-b-xl'>
    <h1 className='text-5xl text-white font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
    <p className='text-sm text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all</p>
    <button className='btn-sm rounded-xl text-[#9538E2] bg-white font-bold'>Shop Now</button>
    
    <div className='absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 border-2 rounded-2xl p-2 bg-[#FFFFFF4D] '>
        <img className=' rounded-2xl' src={imgBanner} alt="" />
    </div>
</div>

    </div>
    

    );
};

export default Banner;