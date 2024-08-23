import React, { useContext } from "react";
import Hero from "../../Components/Hero/Hero";
import "./Home.css"

import Products from "../../Components/Products/Products";
import ProductContext from "../../Context/ProductContext";
const Home = () => {
  let {productList} = useContext(ProductContext);

  return (
    <div>
      <Hero />

     <Products productList={productList} title={"Products"}/>
    </div>
  );
};

export default Home;
