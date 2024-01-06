import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

interface FavoriteState {
  favorite: any[]; 
}
const initialState: FavoriteState = {
  favorite: [
  ],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<any>) => {
      const existingProductIndex = state.favorite.findIndex((product) => product.id === action.payload.id);

      if (existingProductIndex >= 0) {
      
        state.favorite[existingProductIndex].quantity += 1;
        toast.info(`The number of ${action.payload.title} in the favorite has increased!`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
     
        const tempProduct = { ...action.payload, quantity: 1 };
        state.favorite.push(tempProduct);
        toast.success(`${action.payload.title} added to favorites!`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
      }
      
    
      return state;
      
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;

export const favReducer = favoriteSlice.reducer;