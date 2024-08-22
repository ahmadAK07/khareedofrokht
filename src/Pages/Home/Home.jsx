import React from "react";
import Hero from "../../Components/Hero/Hero";
import "./Home.css"
import { FaCartShopping } from "react-icons/fa6";
const Home = () => {
  let productList = [
    {
      url: "./product-1.jpg",
      title: "Glass Tea Pot Kettle With Infuser",
      price: "3,499",
    },
    {
      url: "./product-2.jpg",
      title: "4 Mould Frying Pan Non-Stick",
      price: "3,599",
    },
    {
      url: "./product-3.jpg",
      title: "Dough Whisk Bread Mixer Stainless Steel",
      price: "3,599",
    },
    {
      url: "./product-4.jpg",
      title: "Self Stirring Borosilicate Glass Cup",
      price: "3,599",
    },
    {
      url: "./product-5.jpg",
      title: "Glass Storage Canister Jar With Wood Lid",
      price: "3,599",
    },
    {
      url: "./product-6.jpg",
      title: "4Pcs Mini Seasoning Sauce Box",
      price: "3,599",
    },
    {
      url: "./product-7.jpg",
      title: "Square Glass Cup With Bamboo Lid & Straw",
      price: "3,599",
    },
    {
      url: "./product-8.jpg",
      title: "Cheese Grater With Shaker Head",
      price: "3,599",
    },
  ];
  return (
    <div>
      <Hero />

     <div className="container ">
      <h1 className="display-1 roboto-semibold text-center py-30">Products</h1>
     <div className="products py-30">
        {productList.map((item, i) => (
          <div className="product-card" key={i}>
            <img className="product-card__avatar" src={item.url} alt=""/>
            <div className="product-card__title">{item.title}</div>
            <div className="product-card__footer">
              <span className="product-card__price">Rs. {item.price}</span> <button className="btn"> <FaCartShopping /> </button>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Home;
