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
    <div>
      <h2>Your Cart</h2>
      <ul>
      {cartItems.map((item:any) => (
        <CartItem key={item.id.toString()} item={item} onRemove={handleRemoveFromCart} />
      ))}
      </ul>
      <p>Total Quantity: {cartItems.reduce((total, item) => total + item.cartQuantity, 0)}</p>
      <p>Total Amount: {cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0)}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
