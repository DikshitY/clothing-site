import { useSelector } from "react-redux";
import ProductShow from "./ProductShow";
import { nanoid } from "@reduxjs/toolkit";
import { el } from "@faker-js/faker";

function ProductList() {
  const data = useSelector((state) => state.productsData.data);
  const { searchTerm, brand, price, rating } = useSelector(
    ({ searchTerm, filter: { brand, price, rating } }) => {
      return {
        searchTerm,
        brand,
        price,
        rating,
      };
    }
  );
  // const searchTerm = useSelector(state => state.searchTerm)
  // const brand = useSelector(state => state.filter.brand)
  // const price = useSelector(state => state.filter.price)
  // const rating = useSelector(state => state.filter.rating)

  const filterSearch = data.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filterBrand = filterSearch.filter((product) => {
    if (brand) {
      return product.brand === brand;
    } else {
      return product;
    }
  });

  const filterPrice = filterBrand.filter((product) => {
    if (price) {
      if (price === "Under 500") return product.price < 500;
      else return product.price >= 500;
    } else {
      return product;
    }
  });

  const filterRating = filterPrice.filter((product) => {
    if (rating) {
      return product.rating === rating;
    } else {
      return product;
    }
  });

let content;
if(filterRating.length > 0){
  content = filterRating.map((product) => {

    return <ProductShow key={nanoid()} product={product}/>
  });
}else{
  content = 'No result'
}

  return <div className="flex flex-wrap py-4">{content}</div>;
}

export default ProductList;
