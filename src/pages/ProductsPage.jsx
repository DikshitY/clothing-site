import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 w-full fixed z-10 h-20 shadow-xl bg-white">
        <Link to="..">
          <IoArrowBackCircle className="text-4xl"/>
        </Link>
        <SearchBar />
        <Link to='.' className="text-4xl">zevi</Link>
      </div>
      <div className="flex gap-8 mt-20 w-full h-full">
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;
