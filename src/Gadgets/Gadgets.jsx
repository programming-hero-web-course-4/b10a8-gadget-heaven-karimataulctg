import React, {useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        fetch('./gadgetData.json')
       .then(response => response.json())
       .then(data => setGadgets(data))
    }, [])
    return (
        <div>
           <h1 className='text-4xl text-center font-bold mb-4'>Explore Cutting-Edge Gadgets</h1> 
          <div>
          {
            gadgets.map((gadget => <Gadget key={gadget.Product_Id} gadget={gadget}></Gadget>))
           }
          </div>
        </div>
    );
};

export default Gadgets;