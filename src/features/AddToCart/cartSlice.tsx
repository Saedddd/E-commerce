import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  cartQuantity: number;
  title: string;
  image?: any;
  brand: string;
  price: number;
  rating: number;
  desc: string;
  id: number;
    
}

export interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
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
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

