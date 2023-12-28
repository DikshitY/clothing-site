import { useDispatch, useSelector } from "react-redux";
import { changeBrand, changePrice, changeRating } from "../store";

function Filters() {
  const dispatch = useDispatch();
  const { brand, price, rating } = useSelector(({ filter }) => {
    return {
      brand: filter.brand,
      price: filter.price,
      rating: filter.rating,
    };
  });
  // const brand = useSelector(state => state.filter.brand)
  // const price = useSelector(state => state.filter.price)
  // const rating = useSelector(state => state.filter.rating)

  const handleBrandChange = (value) => {
    dispatch(changeBrand(value));
  };

  const handlePriceRangeChange = (value) => {
    dispatch(changePrice(value));
  };

  const handleRatingChange = (value) => {
    dispatch(changeRating(value));
  };

  return (
    <div className="flex flex-col min-w-44 p-4">
      <h1 className="mt-4 font-semibold text-xl mb-6">Search Results</h1>
      <p className="font-semibold">Brand</p>
      <div className="flex flex-col border-b-2 border-gray-200 py-2">
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="brand"
            checked={brand === "Mango"}
            onChange={() => handleBrandChange("Mango")}
          />
          Mango
        </label>

        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="brand"
            checked={brand === "H&M"}
            onChange={() => handleBrandChange("H&M")}
          />
          H&M
        </label>
      </div>
      <p className="font-semibold mt-2">Price Range</p>
      <div className="flex flex-col py-2 border-b-2 border-gray-200">
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="priceRange"
            checked={price === "Under 500"}
            onChange={() => handlePriceRangeChange("Under 500")}
          />
          Under 500
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="priceRange"
            checked={price === "Above 500"}
            onChange={() => handlePriceRangeChange("Above 500")}
          />
          Above 500
        </label>
      </div>
      <p className="font-semibold mt-2">Ratings</p>
      <div className="flex flex-col py-2 border-b-2 border-gray-200">
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="ratings"
            checked={rating === "5 Star"}
            onChange={() => handleRatingChange("5 Star")}
          />
          5 Star
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="ratings"
            checked={rating === "4 Star"}
            onChange={() => handleRatingChange("4 Star")}
          />
          4 Star
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="ratings"
            checked={rating === "3 Star"}
            onChange={() => handleRatingChange("3 Star")}
          />
          3 Star
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="ratings"
            checked={rating === "2 Star"}
            onChange={() => handleRatingChange("2 Star")}
          />
          2 Star
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            name="ratings"
            checked={rating === "1 Star"}
            onChange={() => handleRatingChange("1 Star")}
          />
          1 Star
        </label>
      </div>
    </div>
  );
}

export default Filters;
