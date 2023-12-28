import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

function ProductShow({product}){
    const [isWishist, setIsWishist] = useState(false);
    const handleClick = () => {
      setIsWishist(!isWishist);
    };

    return (
        <div className="product-div w-44 p-4 relative">
          <img src={product.image} className="h-52 object-cover" />
          <p className="text-sm font-semibold mt-3">{product.name}</p>
          <p className="text-blue-600 mt-1">
            Rs.{Number(product.price).toFixed(0)}
          </p>
          <p className="text-sm text-yellow-700 mt-1">{product.brand}</p>
          <p className="text-sm mt-1">{product.rating}(210)</p>
          <button className="absolute top-6 right-6" onClick={handleClick}>
            {isWishist ? (
              <IoHeartSharp className="text-red-600 text-xl" />
            ) : (
              <IoHeartOutline className="text-xl text-white" />
            )}
          </button>
          <button className="show-btn hidden z-20 absolute bg-blue-300 text-white left-4 right-4 top-52 ">
            Show Product
          </button>
        </div>
      );

}

export default ProductShow;