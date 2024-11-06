import React from 'react';
import Banner from '../Banner/Banner';

// import Gadgets from '../Gadgets/Gadgets';
import GadgetList from '../GadgetList/GadgetList';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet><title>Gadget Heaven</title></Helmet>
            <Banner></Banner>
            
            {/* <Gadgets></Gadgets> */}
            <GadgetList></GadgetList>
        </div>
    );
};

export default Home;