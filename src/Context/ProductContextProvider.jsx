
import React, { useEffect, useState } from 'react';
import ProductContext from './ProductContext';



const ProductContextProvider = ({children}) => {
    let [productList, setProductList] = useState(  
       [
        {
          id: "p1",
          url: "./product-1.jpg",
          title: "Glass Tea Pot Kettle With Infuser",
          price: 3499,
        },
        {
          id: "p2",
          url: "./product-2.jpg",
          title: "4 Mould Frying Pan Non-Stick",
          price: 3599,
        },
        {
          id: "p3",
          url: "./product-3.jpg",
          title: "Dough Whisk Bread Mixer Stainless Steel",
          price: 3599,
        },
        {
          id: "p4",
          url: "./product-4.jpg",
          title: "Self Stirring Borosilicate Glass Cup",
          price: 3599,
        },
        {
          id: "p5",
          url: "./product-5.jpg",
          title: "Glass Storage Canister Jar With Wood Lid",
          price: 3599,
        },
        {
          id: "p6",
          url: "./product-6.jpg",
          title: "4Pcs Mini Seasoning Sauce Box",
          price: 3599,
        },
        {
          id: "p7",
          url: "./product-7.jpg",
          title: "Square Glass Cup With Bamboo Lid & Straw",
          price: 3599,
        },
        {
          id: "p8",
          url: "./product-8.jpg",
          title: "Cheese Grater With Shaker Head",
          price: 3599,
        },
      ]
    )

    return (
        <ProductContext.Provider value={{ productList, setProductList }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
