import React from 'react';
import { FavoriteItem } from '@/';

interface FavoriteItemProps {
  item: FavoriteItem;
  onRemove: (productId: number) => void;
}

const FavoriteItemComponent: React.FC<FavoriteItemProps> = ({ item, onRemove }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Brand: {item.brand}</p>
      <p>Rating: {item.rating}</p>
      <p>Description: {item.desc}</p>
      <button onClick={() => onRemove(item.id)}>Remove from Favorites</button>
    </div>
  );
};

export default FavoriteItemComponent;