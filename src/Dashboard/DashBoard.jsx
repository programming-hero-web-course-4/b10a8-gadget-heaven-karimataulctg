// DashBoard.js
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import del from '../assets/delete.png';
import { Helmet } from 'react-helmet';

const DashBoard = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart!');
  };

  return (
    <div>
        <Helmet><title>Favorites Gadget|GH</title></Helmet>
      <div className='relative bg-[#9538E2] pb-10 mb-10 pt-4'>
        <h2 className='text-4xl font-bold text-center text-white mb-2'>Dashboard</h2>
        <p className='text-white text-center text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className='flex justify-center items-center gap-2 mt-6'>
          <button className="btn btn-sm px-16 text-lg rounded-badge text-[#9538E2]">Cart ({cart.length})</button>
          <button className="btn btn-sm btn-outline text-lg rounded-badge text-white px-16">Wishlist</button>
        </div>
      </div>
      <div>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex items-start gap-4 mb-4">
                <div className='border-2 w-full rounded-lg flex justify-between px-6 py-4'>
                  <div className='flex gap-3'>
                    <div>
                      <img src={item.product_image} alt={item.product_title} className="w-24 h-24 rounded-md" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{item.product_title}</h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-sm">Description: {item.description}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="text-red-500 mt-2"
                      onClick={() => removeFromCart(index)}
                    >
                      <img className='w-6 h-6' src={del} alt="Delete" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-2xl font-bold mb-10'>No items in the cart.</p>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DashBoard;
