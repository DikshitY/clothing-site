import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeState } from "../store";
import LatestTrends from "./LatestTrends";
import { changeSearchTerm } from "../store";

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchTerm);
  const location = useLocation();

  const handleClick = () => {
    dispatch(changeState());
  };

  const handleSearchChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className={`w-3/5 flex bg-white items-center text-xl p-4 rounded-xl ${location.pathname !== "/" && 'border-2 p-2 text-lg'}`}>
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          onClick={location.pathname === "/" ? handleClick : null}
        />
        <CiSearch className="text-3xl"/>
      </div>
      {location.pathname === "/" && <LatestTrends />}
    </div>
  );
}

export default SearchBar;
