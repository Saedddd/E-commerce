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
  const isLastPage = page === pages[pages.length - 1];

  const dispatch = useDispatch();

  const handleAddToCart = (product:any) => {
    dispatch(addToCart(product));
  };


  useEffect(() => {
    // Сбросить страницу при изменении поискового запроса
    setPage(1);
  }, [searchTerm]);


  return (
    <>

      <div className="max-w-4xl m-auto min-h-screen py-3">
        <div className="flex justify-center">
          <div className="flex justify-center mb-4 w-[56rem]}">
            <input 
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block min-w-[50%] ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600"
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
                const filteredProducts = data.products.filter((product) =>
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );

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
          <button
            className={`p-4 hover:text-gray-500 duration-100 ${
              page === 1 ? 'text-gray-200 hover:text-gray-200' : ''
            }`}
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <div className="p-4 text-center">
            {pages.map((pageL) => (
              <span
                key={pageL}
                onClick={() => setPage(pageL)}
                className={`p-1 cursor-pointer hover:text-gray-500  ${
                  pageL === page ? 'text-gray-200 hover:text-gray-200' : ''
                }`}
              >
                {pageL}
              </span>
            ))}
          </div>
          <button
            className={`p-4 hover:text-gray-500 duration-100 ${
              isLastPage ? 'text-gray-200 hover:text-gray-200' : ''
            }`}
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={isLastPage}
          >
            Next
          </button>
        </div>

        
      </div>
    </>
  );
};

export default Catalog;
