import React from 'react'
import "./Products.css"
import { FaCartShopping } from "react-icons/fa6";
const Products = ({productList, title}) => {
  return (
    <div className="container ">
      <h1 className="display-1 roboto-semibold text-center py-30"> {title} </h1>
     <div className="products ">
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
  )
}

export default Products
