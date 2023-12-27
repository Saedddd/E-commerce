'use client'

import Link from 'next/link'
import React from 'react'

import { IoCartOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { GoSignIn } from "react-icons/go";

const Header = () => {
  return (
    <div className='bg-gray-600 h-12 '>
        <div className="flex justify-between max-w-5xl m-auto py-3 ">

            <div className="">
                <Link href={'/'}>
                    <h1 className='items-center'>Saed</h1>
                </Link>
                
            </div>

            <div className="flex justify-between">
                <div className="">
                    <Link href='/'>
                        <FcLike size={25}/>
                    </Link>
                    
                </div>

                <div className="ml-5">
                    <Link href={'/cart'}>
                        <IoCartOutline size={25}/>
                    </Link>
                    
                </div>
            </div>

            <div className="">
                <Link href={'/'}>
                    <GoSignIn size={25}/>
                </Link>
                
            </div>

        </div>
    </div>
  )
}

export default Header;