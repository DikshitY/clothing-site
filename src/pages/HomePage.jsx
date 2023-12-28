import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page flex flex-col p-4 gap-16">
      <Link to="/zevi" className="self-end text-4xl">zevi</Link>
      <SearchBar />
    </div>
  );
}

export default HomePage;
