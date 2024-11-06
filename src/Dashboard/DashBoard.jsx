import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, NavLink } from 'react-router-dom';
import del from '../assets/delete.png';
import { Helmet } from 'react-helmet';
import imgModal from '../assets/modal.png';

const DashBoard = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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

  const sortCartByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const purchaseItems = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    document.getElementById('purchase_modal').showModal();
  };

  const handleModalClose = () => {
    document.getElementById('purchase_modal').close();
    navigate('/');
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Helmet><title>Favorites Gadget | GH</title></Helmet>
      <div className='relative bg-[#9538E2] pb-10 mb-10 pt-4'>
        <h2 className='text-4xl font-bold text-center text-white mb-2'>Dashboard</h2>
        <p className='text-white text-center text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <div className='flex justify-center items-center gap-2 mt-6'>
          <NavLink to="/dashboard" className="btn btn-sm px-16 text-lg rounded-badge text-[#9538E2]">
            Cart
          </NavLink>
          <NavLink to="/wishlist" className="btn btn-sm btn-outline text-lg rounded-badge text-white px-16">
            Wishlist
          </NavLink>
        </div>
      </div>
      <div className='flex justify-between items-center py-4'>
        <div><h2 className='text-2xl'>Cart: {cart.length}</h2></div>
        <div className='flex gap-4'>
          <h3 className='text-xl font-bold'>Total Cost: ${totalCost.toFixed(2)}</h3>
          <button 
            className="btn btn-sm btn-outline px-10 text-lg rounded-badge text-[#9538E2]"
            onClick={sortCartByPrice}
          >
            Sort By Price
          </button>
          <button 
            className="btn btn-sm text-white bg-[#9538E2] text-lg rounded-badge px-10"
            onClick={purchaseItems}
            disabled={cart.length === 0}
          >
            Purchase
          </button>
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
      <dialog id="purchase_modal" className="modal">
        <div className="modal-box flex flex-col justify-center items-center ">
          <img src={imgModal} alt="" />
          <h3 className="font-bold text-lg">Purchase Successful!</h3>
          <p className="py-4">Your purchase was successful. Enjoy your shopping!!!.</p>
          <div className="modal-action">
            <button className="btn" onClick={handleModalClose}>Close</button>
          </div>
        </div>
      </dialog>
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
