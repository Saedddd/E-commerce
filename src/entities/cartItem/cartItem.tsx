import React from 'react';


import { CartItem as CartItemType } from '@/features/AddToCart/types';


import { MdDeleteOutline } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";

interface CartItemProps {
  item: CartItemType;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <li className='text-xs m-5'>
      <li>
        {item.title}
      </li>
      <li className='flex'>
        <IoPricetagOutline size={10} /> {item.price}
      </li>
      <li>
        Quantity: {item.cartQuantity}
      </li>
         
      <button className='m-auto' onClick={() => onRemove(item.id)}><MdDeleteOutline size={20}/></button>
    </li>
  );
};

export default CartItem;
