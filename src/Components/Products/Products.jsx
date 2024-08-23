import React, { useContext, useEffect } from 'react';
import "./Products.css";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from '../../Context/CartContext';

const Products = ({ productList, title }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const addItem = (productId, productTitle) => {
        setCartItems((prevCartItems) => {
            // Check if the item already exists in the cart
            const existingItemIndex = prevCartItems.findIndex(item => item.productId === productId);
            
            if (existingItemIndex >= 0) {
                // If item exists, increase the quantity
                return prevCartItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 , productTitle: productTitle}
                        : item
                );
            } else {
                // If item doesn't exist, add it with quantity 1
                return [...prevCartItems, { productId: productId, quantity: 1, productTitle: productTitle }];
            }
        });
    };



    return (
        <div className="container">
            <h1 className="display-1 roboto-semibold text-center py-30">{title}</h1>
            <div className="products">
                {productList.map((item, i) => (
                    <div className="product-card" key={i}>
                        <img className="product-card__avatar" src={item.url} alt="" />
                        <div className="product-card__title">{item.title}</div>
                        <div className="product-card__footer">
                            <span className="product-card__price">Rs. {item.price}</span>
                            <button onClick={() => addItem(item.id, item.title)} className="btn">
                                <FaCartShopping />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
