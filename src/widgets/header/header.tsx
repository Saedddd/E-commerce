'use client'

import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-600 h-12 '>
        <div className="flex justify-between max-w-5xl m-auto py-3 ">

            <div className="">
                <h1 className='items-center'>Saed</h1>
            </div>

            <div className="flex justify-between">
                <div className="">
                    <button className='cursor-pointer'>()</button>
                </div>

                <div className="ml-2">
                    <button>[]</button>
                </div>
            </div>

            <div className="">
                Login
            </div>

        </div>
    </div>
  )
}

export default Header