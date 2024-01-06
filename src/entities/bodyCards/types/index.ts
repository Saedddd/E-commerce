
export interface Product {
    title: string;
    image: any;
    brand: string;
    price: number;
    rating: number;
    desc: string;
    id: number;
  }
  
  export interface BodyCardsProps {
    title: string;
    image: any;
    brand: string;
    price: number;
    rating: number;
    desc: string;
    id: number;
    onAddToCart: (product: Product) => void;
  }