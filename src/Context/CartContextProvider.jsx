import CartContext from "./CartContext";
import React, { useEffect, useState } from 'react';

const CartContextProvider = ({children}) => {
    // Initialize cartItems from local storage if available, otherwise set default value
    const [cartItems, setCartItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        // Save cartItems to local storage whenever it changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]); // Depend on cartItems to trigger effect on change

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
