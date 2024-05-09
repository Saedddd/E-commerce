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
