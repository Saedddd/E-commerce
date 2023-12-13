import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from './types';

import { toast } from 'react-toastify';


const storedCartItems = localStorage.getItem('cartItems');
const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : []; // проверка: есть ли продукты в лолакстраже, если есть, то возрвращается в виде начального состояния

const initialState: CartState = {
  cartItems: initialCartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.cartItems[index].cartQuantity += 1;
        toast.info(`The number of ${action.payload.title} in the cart has increased`,{
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart!`,{
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

