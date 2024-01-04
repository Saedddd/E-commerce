import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from '@/shared/lib/redux/store';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  cartQuantity: number;
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
        toast.info(`The number of ${action.payload.title} in the cart has increased`, {
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
        toast.success(`${action.payload.title} added to cart!`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      updateCartTotal(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      updateCartTotal(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      updateCartTotal(state);
    },
  },
});

const updateCartTotal = (state: CartState) => {
  state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
  state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
