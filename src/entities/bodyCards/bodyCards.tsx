import React from 'react'



// addToCart


interface Product {
  title: string;
  image: any;
  brand: string;
  price: number;
  rating: number;
  desc: string;
  id: number;
}

interface BodyCardsProps {
  title: string;
  image: any;
  brand: string;
  price: number;
  rating: number;
  desc: string;
  id: number;
  onAddToCart: (product: Product) => void;
}

    const BodyCards: React.FC<BodyCardsProps> = ({
      title,
      image,
      brand,
      price,
      rating,
      desc,
      id,
      onAddToCart,
    }) => {
      

  return (
    <div className='mb-5'>
    
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-64 h-70">
              <img className="h-60 bg-white p-5 m-auto" src={image} alt={title} />
        <div className="p-4">
          <div className="">

            <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{brand}</p>
            </div>

            <div className="flex justify-between">

              <div className="">
                <p className="text-gray-700 text-base">Price: ${price}</p>
                <p className="text-gray-700 text-base">Rating: {rating}/5</p>
              </div>

              <div className="flex justify-end mt-3">
                <div className="">
                  <button>Like</button>
                </div>
                <div className="ml-2">
                  <button onClick={() => onAddToCart({ title, image, brand, price, rating, desc, id })}>
                    Add
                  </button>
                  
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base">{desc}</p>

          </div>
              
    </div>
    </div>
  )
}

export default BodyCards