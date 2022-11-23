import React from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();
  return (
    <div>
      <span>product page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
