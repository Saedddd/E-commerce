'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, selectCartItems } from '@/features/AddToCart/cartSlice';


import CartItem from '@/entities/cartItem/cartItem';




const CartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: any) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center">
        <div className='w-96 h-screen my-14'>
          <h2 className='text-center my-7'>Your Cart</h2>

            <div className="flex justify-center">
                <p className='px-5'>Total Quantity: {cartItems.reduce((total: any, item: { cartQuantity: any; }) => total + item.cartQuantity, 0)}</p>
                <p className='px-5'>Total Amount: {cartItems.reduce((total: number, item: { price: number; cartQuantity: number; }) => total + item.price * item.cartQuantity, 0)}</p>
            </div>
                

          <ul className='w-80'>

            {cartItems.length > 0 ? (
                cartItems.map((item: any) => (
                  <CartItem key={item.id.toString()} item={item} onRemove={handleRemoveFromCart} />
                ))
              ) : (
                <p className='py-14 text-center '>Cart is empty...</p>
              )}
          </ul>

          <button  className="flex m-auto" onClick={handleClearCart}>Clear Cart</button>

      </div>
    </div>
    
  );
};

export default CartPage;

