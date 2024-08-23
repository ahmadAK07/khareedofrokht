import React, { useContext } from 'react';
import "./Cart.css";
import CartContext from '../../Context/CartContext';
import ProductContext from '../../Context/ProductContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartItems, setCartItems } = useContext(CartContext);
    const { productList } = useContext(ProductContext);

    const increaseQuantity = (productId) => {
        console.log(cartItems);
        setCartItems(prevItems => 
            prevItems.map(item =>
                item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems(prevItems => 
            prevItems.map(item =>
                item.productId === productId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Ensure quantity doesn't go below 1
                    : item
            )
        );
    };

    return (
        <div>
            <h1 className='text-center py-30 poppins-semibold display-2'>Your Cart</h1>

            <div className="container cart-container">
                <div className="cart-items py-30">
                    {cartItems.length === 0 ? (
                        <p className="text-center">There are no items in your cart.</p>
                    ) : (
                        cartItems.map((item, key) => {
                            const product = productList.find(p => p.id === item.productId);
                            if (product) {
                                return (
                                    <div className='cart-item' key={key}>
                                        <img className='cart-item__avatar' src={product.url} alt="" />
                                        <div className="cart-item__content poppins-normal">
                                            <h2>{product.title}</h2>
                                            <h6 className='display-4 cart-item__price'>Rs. {Number(product.price) * Number(item.quantity)}</h6>
                                            <div className="cart-item__quantity">
                                                <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.productId)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    )}
                </div>

                <div className='cart-btns'>
                    <button className='clear-cart btn' onClick={() => setCartItems([])}>Clear Cart</button>
                    <Link to={"/form"} className='checkout-btn btn'>Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
