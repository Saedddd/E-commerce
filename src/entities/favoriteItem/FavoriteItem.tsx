import { IFavorite } from "@/entities/favoriteItem/types";

const FavoriteItem = ({ id, title, price, image }: IFavorite) => {
  return (
    <div className="flex p-4 border-b-2" key={id}>
      <div className='w-20'>
        <img src={image} alt={title} />
      </div>
      <div className='pl-5'>
        <p className='text-black'>{title}</p>
        <p className='text-black font-bold'>Price: {price}$</p>
      </div>
    </div>
  );
}

export default FavoriteItem;