import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import imgCart from '../assets/shopping-cart-NavIcon.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const GadgetDetail = () => {
  const { product_id } = useParams(); // product_id is a string
  const data = useLoaderData(); // data is the array from the JSON

  // Find gadget using the string comparison
  const gadget = data.find(gadget => gadget.product_id === product_id);

  if (!gadget) {
    return <p>Gadget not found!</p>;
  }

  const { product_image, product_title, description, price, specification, rating } = gadget;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = cart.find(item => item.product_id === gadget.product_id);

    if (alreadyInCart) {
      toast.error('Item already in cart!');
    } else {
      cart.push(gadget);
      localStorage.setItem('cart', JSON.stringify(cart));
      toast.success('Added to cart!');
    }
  };

  return (
    <>
    <Helmet><title>Gadget Details|GH</title></Helmet>
      <div className='relative bg-[#9538E2] pb-32 mb-72 pt-2'>
        <h2 className='text-4xl font-bold text-center text-white mb-2'>Product Details</h2>
        <p className='text-white text-center text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      </div>
      <div className='absolute top-52 left-80 z-20 rounded-t-xl'>
        <div className="hero bg-white min-h-[calc(100vh-200px)] rounded-t-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product_image}
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{product_title}</h1>
              <p className="py-6">{description}</p>
              <p><span className='font-bold'>Price:</span> ${price}</p>

              <p><span className='font-bold'>Specification:</span></p>
              <ul>
                {specification.map((spec, index) => (
                  <li key={index}>{`${index + 1}. ${spec}`}</li>
                ))}
              </ul>

              <p><span className='font-bold'>Rating:</span> </p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              {rating}
              <br />
              <button
                className="px-4 py-2 flex justify-center text-white rounded-badge items-center gap-2 mt-2 bg-[#9538E2]"
                onClick={addToCart}
              >
                Add to Cart <img className='w-4 h-4' src={imgCart} alt="" />
              </button>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default GadgetDetail;
