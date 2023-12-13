'use client'


import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';




import type { Product } from './types';
import { useGetCardsQuery } from '@/shared/api/cardsApiSlice'
import { BodyCards } from '@/entities/bodyCards'
import { addToCart } from '../../features/AddToCart/cartSlice';


const Catalog = () => {
  

// Pagination
  const [page, setPage] = useState<number>(1)
  const {data,error,isLoading}= useGetCardsQuery(page);
  const pages = [1,2,3,4,5];

  const dispatch = useDispatch();
 

  const handleAddToCart =  (product: Product) => {
    dispatch(addToCart(product));
    
  };
 
  return (
    <>
    <div className=" max-w-4xl m-auto py-3">
        <div className="flex flex-wrap justify-around">
          {error ? (
            <p>ERROR!</p>
          ) : isLoading ? (
            <p>LOADING...</p>
          ) : data ? (
            data?.products?.map((product)  => (
              <BodyCards
                key={product.id}
                title={product.title}
                image={product.images[0] || 'default-image-url'}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                desc={product.desc}
                id={product.id}
                onAddToCart={()=>handleAddToCart(product)}
              />
            ))
          ) : null}
        </div>
        
        <div className="flex justify-center">
          <button
            className="p-4 hover:text-gray-500 duration-100"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1} // Выключаем кнопку Previous, если находимся на первой странице
          >
            Previous
          </button>
          {<div className="p-4 text-center">
            {pages.map((pageL, index) => (
              <span
                key={index}
                onClick={() => setPage(pageL)}
                className={`p-1 cursor-pointer hover:text-gray-500  ${pageL === page ? 'text-gray-200' : null}`}
              >
                {pageL}
              </span>
            ))}
          </div>}
          <button
            className="p-4 hover:text-gray-500 duration-100"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === pages[pages.length - 1]} // Отключаем кнопку "Next" на последней странице
          >
            Next
          </button>
        </div>

    </div>
        
    </>
  )
}

export default Catalog