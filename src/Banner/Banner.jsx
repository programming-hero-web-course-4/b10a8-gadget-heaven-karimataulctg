import React from 'react';
import imgBanner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='mb-36 lg:mb-52'>
      <div className='bg-[#9538E2] relative text-center flex flex-col justify-center items-center gap-y-4 lg:gap-y-6 py-20 lg:pb-52 rounded-b-xl'>
        <h1 className='text-3xl lg:text-5xl text-white font-bold leading-tight'>
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className='text-xs lg:text-sm text-white text-center'>
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all
        </p>
        <button className='btn-sm rounded-xl text-[#9538E2] bg-white font-bold'>
          Shop Now
        </button>

        <div className='absolute top-96 lg:top-80   z-10 border-2 rounded-2xl p-2 bg-[#FFFFFF4D]'>
          <img className='rounded-2xl  h-36 lg:h-80' src={imgBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
