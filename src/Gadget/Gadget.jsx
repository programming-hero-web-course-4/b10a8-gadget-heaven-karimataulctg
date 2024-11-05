import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({gadget}) => {
    const {product_id, product_title, product_image, price } = gadget;
    return (
         <Link to={`/gadgets/${product_id}`}>
          <div key={product_id} className='flex flex-col items-center gap-4 '>
                            <div className="card bg-base-100 w-80 shadow-xl ">
                        <figure className="px-8 pt-8">
                            <img 
                            src={product_image} 
                            alt="Gadget"
                            className="rounded-xl w-44 h-44" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product_title}</h2>
                            <p>Price: ${price}</p>
                            <div className="card-actions">
                            <button className="btn btn-outline rounded-badge font-bold text-[#9538E2]">View Details</button>
                            </div>
                        </div>
                        </div>
                           
                        </div>
         </Link>
                    
    );
};

export default Gadget;