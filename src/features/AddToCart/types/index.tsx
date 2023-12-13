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
  