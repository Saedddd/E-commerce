'use client'

import { RootState } from "@/shared/lib/redux/store";
import { useSelector } from "react-redux";
import { IFavorite } from "./types";
import FavoriteItem from "@/entities/favoriteItem";

const Favorite = ({ isFavOpen, setIsFavOpen }: IFavorite) => {
  const cards = useSelector((state: RootState) => state.favorite);
  console.log(cards);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h4 className="text-center text-black font-bold">Favourite:</h4>
        {cards && cards.favorite && cards.favorite.length > 0 ? (
          cards.favorite.map((fav: any) => (
           <FavoriteItem key={fav.id} id={fav.id} title={fav.title} price={fav.price} image={fav.images} />
          ))
        ) : (
          <p className="text-center text-black">No favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorite;