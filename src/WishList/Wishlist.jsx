import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import del from '../assets/delete.png';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Item removed from wishlist!');
  };

  return (
    <div>
      <Helmet><title>Wishlist | GH</title></Helmet>
      <div className='relative bg-[#9538E2] pb-10 mb-10 pt-4'>
        <h2 className='text-4xl font-bold text-center text-white mb-2'>Dashboard</h2>
        <p className='text-white text-center text-sm'>Explore the latest gadgets you wish to own. From smart devices to the coolest accessories, we have it all!</p>
        <div className='flex justify-center items-center gap-2 mt-6'>
          <NavLink to="/" className="btn btn-sm px-16 text-lg rounded-badge text-[#9538E2]">Cart</NavLink>
          <NavLink to="/wishlist" className="btn btn-sm btn-outline text-lg rounded-badge text-white px-16">Wishlist</NavLink>
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-6'>Wishlist</h2>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((item, index) => (
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
                      onClick={() => removeFromWishlist(index)}
                    >
                      <img className='w-6 h-6' src={del} alt="Delete" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-2xl font-bold mb-10'>No items in the wishlist.</p>
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

export default Wishlist;
