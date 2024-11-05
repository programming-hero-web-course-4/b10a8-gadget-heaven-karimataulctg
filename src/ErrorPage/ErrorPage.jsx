import React from 'react';
import errorImage from './../assets/error-404.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;