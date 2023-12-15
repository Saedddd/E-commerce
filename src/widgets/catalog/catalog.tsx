'use client'


import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCardsQuery } from '@/shared/api/cardsApiSlice';
import { BodyCards } from '@/entities/bodyCards';
import { addToCart } from '../../features/AddToCart/cartSlice';

const Catalog = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, error, isLoading } = useGetCardsQuery(page);
  const pages = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>

      <div className="max-w-4xl m-auto py-3">
        <div className="flex justify-center mb-4">
          <input 
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

        </div>

        <div className="flex flex-wrap justify-around">
          {error ? (
            <p>ERROR!</p>
          ) : isLoading ? (
            <p>LOADING...</p>
          ) : data ? (
            data.products
              .filter((product) => //Filter for search
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <BodyCards
                  key={product.id}
                  title={product.title}
                  image={product.images[0] || 'default-image-url'}
                  brand={product.brand}
                  price={product.price}
                  rating={product.rating}
                  desc={product.desc}
                  id={product.id}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))
          ) : null}
        </div>

        <div className="flex justify-center">
          <button
            className="p-4 hover:text-gray-500 duration-100"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <div className="p-4 text-center">
            {pages.map((pageL, index) => (
              <span
                key={index}
                onClick={() => setPage(pageL)}
                className={`p-1 cursor-pointer hover:text-gray-500  ${
                  pageL === page ? 'text-gray-200' : null
                }`}
              >
                {pageL}
              </span>
            ))}
          </div>
          <button
            className="p-4 hover:text-gray-500 duration-100"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === pages[pages.length - 1]}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Catalog;
