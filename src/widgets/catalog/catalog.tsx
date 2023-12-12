'use client'

import React from 'react'
import { useState } from 'react'


import type { IData } from './types';
import { useGetCardsQuery } from '@/shared/api/cardsApiSlice'
import { BodyCards } from '@/entities/bodyCards'


const Catalog = () => {
  

// Pagination
  const [page, setPage] = useState(1)
  const {data,error,isLoading,isFetching}= useGetCardsQuery(page);
  const pages = [1,2,3,4,5];
 
  return (
    <>
    <div className=" max-w-4xl m-auto py-3">
      <div className="flex flex-wrap justify-around">
            {error ? (<>ERROR!</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? data.products.map((prod) => <BodyCards title={prod.title} image={prod.images[0]} brand={prod.brand} price={prod.price} rating={prod.rating} desc={prod.desc} id={prod.id}/>) 
            : null}
           
        </div>
        
        <div className="flex justify-center">
          <button
            className="p-4 hover:text-gray-500 duration-100"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            isLoading={isFetching}
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
            isLoading={isFetching}
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