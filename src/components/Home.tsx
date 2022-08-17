import React from "react";
import { CartState } from "../context/Context";
import { Product } from "../classes";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  }: any = CartState();
  return (
    <div className="home">
      {/* <Filters/> */}
      <div className="productContainer">
        {products.map((product: Product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
