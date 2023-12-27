import React from 'react';
import { CartItem as CartItemType } from '@/features/AddToCart/types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <li>
      {item.title} - {item.price} - Quantity: {item.cartQuantity}
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
