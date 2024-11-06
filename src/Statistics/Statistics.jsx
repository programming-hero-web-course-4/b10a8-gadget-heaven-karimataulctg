import React from 'react';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
         <div>
      <Helmet><title>Statistics | GH</title></Helmet>
      <div className='relative bg-[#9538E2] pb-10 mb-10 pt-4'>
        <h2 className='text-4xl font-bold text-center text-white mb-2'>Statistics</h2>
        <p className='text-white text-center text-sm'>Explore the latest gadgets you wish to own. From smart devices to the coolest accessories, we have it all!</p>

      </div>
      <div>
        <h1 className='text-2xl text-center font-bold py-16'>No items in the Statistics cart.</h1>
      </div>
        </div>
    );
};

export default Statistics;