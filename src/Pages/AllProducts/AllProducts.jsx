import React from 'react'
import Products from '../../Components/Products/Products'

const AllProducts = () => {
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
      <Products productList={productList} title={"All Products"}/>
    </div>
  )
}

export default AllProducts
