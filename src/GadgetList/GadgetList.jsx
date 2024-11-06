import React, { useState, useEffect } from 'react';
import Gadget from '../Gadget/Gadget';

const GadgetList = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('./gadgetData.json')
   .then(response => response.json())
   .then(data => setGadgets(data))
}, [])

  // Extract unique categories
  const categories = ['All', ...new Set(gadgets.map(gadget => gadget.category))];

  // Filter gadgets based on selected category
  const filteredGadgets = selectedCategory === 'All'
    ? gadgets
    : gadgets.filter(gadget => gadget.category === selectedCategory);

  return (
    <div className='flex flex-col lg:flex-row gap-10'>
      {/* Category Buttons */}
      <div className="flex flex-col gap-4 mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline'} rounded-badge`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Gadgets */}
      <div>
      <div>
      <h1 className='text-4xl text-center font-bold mb-4'>Explore Cutting-Edge Gadgets</h1> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredGadgets.map(gadget => (
          <Gadget key={gadget.product_id} gadget={gadget} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default GadgetList;
