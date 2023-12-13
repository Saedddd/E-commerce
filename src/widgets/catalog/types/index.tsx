export interface Product {
  cartQuantity: number;
  title: string;
  image?: any; 
  brand: string;
  price: number;
  rating: number;
  desc: string;
  id: number;
  onAddToCart: (product: Product) => void;
}