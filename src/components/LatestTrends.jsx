import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

function LatestTrends() {
  const active = useSelector((state) => state.toggleSection.toggle);
  const trendsData = useSelector((state) => state.productsData.latestTrends);

  const renderTrendsData = trendsData.map((product) => {
    return (
      <div key={nanoid()} >
        <img src={product.image} className="home-feature-img rounded h-48"/>
        <p className="text-xs mt-2">{product.name}</p>
      </div>
    );
  });

  return (
    <div className={`${active ? "flex" : "hidden"} bg-white p-4 flex-col w-4/5 rounded shadow-xl`}>
        <h2 className="font-semibold mb-2">Latest Trends</h2>
      <div className="flex justify-evenly gap-4">
        {renderTrendsData}
      </div>
      <div className="mt-8">
        <h2 className="font-semibold mb-4">Popular suggestions</h2>
        <ul className="text-xs flex flex-col gap-2">
          <li>Striped shirt dress</li>
          <li>Satin shirts</li>
          <li>Denim jumpsuits</li>
          <li>Leather dresses</li>
          <li>Solid tshirts</li>
        </ul>
      </div>
    </div>
  );
}

export default LatestTrends;
