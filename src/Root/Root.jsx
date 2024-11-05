import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            {/* <div className='min-h-[calc(100vh-316px)] '></div> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;