import { IFavorite } from "@/entities/favoriteItem/types";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromFav } from "@/features/FavoriteSlice/FavoriteSlice";

const FavoriteItem = ({ id, title, price, image }: IFavorite) => {
  const dispatch = useDispatch();

  const removeFromFavorite = () => dispatch(removeFromFav(id));

  return (
    <div className="flex p-4 border-b-2" key={id}>
      <div className='w-20'>
        <img src={image} alt={title} />
      </div>
      <div className='pl-5'>
        <p className='text-black'>{title}</p>
        <p className='text-black font-bold'>Price: {price}$</p>
      </div>
      <button className="m-auto" onClick={removeFromFavorite}>
        <MdDeleteOutline size={20}/>
      </button>
    </div>
  );
}

export default FavoriteItem;