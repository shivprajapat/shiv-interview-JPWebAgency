import { useState } from "react";
import { ProductCard } from "../../components";
import { cardsData } from "../../constants/data";

const Home = () => {
  const [data, setData] = useState(cardsData);

  return (
    <div>
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {data.map((element, id) => {
            return <ProductCard element={element}  key={id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
