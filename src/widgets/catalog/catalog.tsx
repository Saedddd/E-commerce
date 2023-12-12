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
 
  return (
    <>
    <div className="flex justify-between max-w-4xl m-auto py-3">
      <div className="flex flex-wrap justify-around">
            {error ? (<>ERROR!</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? data.products.map((prod) => <BodyCards title={prod.title} image={prod.images[0]} brand={prod.brand} price={prod.price} rating={prod.rating} desc={prod.desc} id={prod.id}/>) 
            : null}
            <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)} isLoading={isFetching}>
                Next
            </button>
        </div>
    </div>
        
    </>
  )
}

export default Catalog