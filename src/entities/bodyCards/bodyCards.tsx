import Link from 'next/link';
import React from 'react'
import { FcLike } from 'react-icons/fc';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux'
import { BodyCardsProps } from './types';

import { addToFav, removeFromFav } from '@/features/FavoriteSlice/FavoriteSlice';






    const BodyCards: React.FC<BodyCardsProps> = ({
      title,
      image,
      brand,
      price,
      rating,
      desc,
      id,
      onAddToCart,
    }) => {
      

      const dispatch = useDispatch();

      const addToFavorite = () => dispatch(addToFav({ id, title, price, image, brand, rating, desc }));
    
      return (
        <div className='mb-5'>
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-64 h-96">
            <img className="h-60 bg-white p-5 m-auto" src={image} alt={title} />
            <div className="p-4">
              <div className="">
                <div className="font-bold text-base mb-2">{title}</div>
                <p className="text-gray-700 text-sm">{brand}</p>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-gray-700 text-xs">Price: ${price}</p>
                  <p className="text-gray-700 text-xs">Rating: {rating}/5</p>
                </div>
                <div className="flex justify-end mt-3">
                  <div className="">

                    <button onClick={addToFavorite}>
                      <FcLike size={25} />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button onClick={() => onAddToCart({ title, image, brand, price, rating, desc, id })}>
                      <IoCartOutline size={25} />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-base">{desc}</p>
            </div>
          </div>
        </div>
      );
}

export default BodyCards