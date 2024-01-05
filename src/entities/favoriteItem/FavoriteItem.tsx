import { IFavorite } from "@/entities/favoriteItem/types";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromFav } from "@/features/FavoriteSlice/FavoriteSlice";

const FavoriteItem = ({ id, title, price, image }: IFavorite) => {
  const dispatch = useDispatch();

  const removeFromFavorite = () => dispatch(removeFromFav(id));

  return (
    <div className="flex justify-between p-4 border-b-2 bg-gray-200 " key={id}>
      <div className='w-20'>
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className='pl-5 flex flex-col justify-center'>
        <p className='text-black font-bold text-xl mb-1'>{title}</p>
        <p className='text-black font-bold'>Price: ${price}</p>
      </div>
      <button className="" onClick={removeFromFavorite}>
        <MdDeleteOutline size={20} className="text-red-500" />
      </button>
    </div>
  );
}

export default FavoriteItem;