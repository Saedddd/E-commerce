'use client'

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCardsQuery } from '@/shared/api/cardsApiSlice';
import { BodyCards } from '@/entities/bodyCards';
import { addToCart } from '../../features/AddToCart/cartSlice';

const Catalog = () => {
  const [page, setPage] = useState<any>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const { data, error, isLoading } = useGetCardsQuery({ page, limit: 16 });
  const pages = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    setPage(1);
  }, [searchTerm, minRating, maxPrice]);

  return (
    <>
      <div className="max-w-4xl m-auto min-h-screen py-3">
        <div className="flex justify-center">
          <div className="flex justify-center mb-4 w-[56rem]}">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block min-w-[50%] ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600"
            />
          </div>
        </div>

        <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-4">
          <span>Min Rating:</span>
          <input
            type="number"
            value={minRating}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinRating(Number(e.target.value))}
            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 p-2.5"
          />
          <span>Max Price:</span>
          <input
            type="number"
            value={maxPrice || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMaxPrice(e.target.value === '' ? null : Number(e.target.value))
            }
            className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 p-2.5"
          />
        </div>
      </div>

        <div className="flex flex-wrap justify-around">
          {error ? (
            <p>ERROR!</p>
          ) : isLoading ? (
            <p>LOADING...</p>
          ) : data ? (
            (() => {
              const filteredProducts = data.products
                .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter((product) => product.rating >= minRating)
                .filter((product) => (maxPrice ? product.price <= maxPrice : true));

              if (filteredProducts.length === 0) {
                return <p className='h-screen p-52'>К сожалению, нет такого продукта...</p>;
              }

              return filteredProducts.map((product) => (
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
              ));
            })()
          ) : null}
        </div>

        <div className="flex justify-center mt-auto">
          <div className="mx-1 px-3 py-2 rounded-md">
            {pages.map((pageL) => (
              <span
                key={pageL}
                onClick={() => setPage(pageL)}
                className={`mx-1 px-3 py-2 rounded-md cursor-pointer  ${
                  pageL === page ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {pageL}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
