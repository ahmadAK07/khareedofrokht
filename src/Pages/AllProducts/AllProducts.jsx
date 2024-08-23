import React, { useContext } from 'react'
import Products from '../../Components/Products/Products'
import ProductContext from '../../Context/ProductContext';

const AllProducts = () => {
  let {productList} = useContext(ProductContext)

  return (
    <div>
      <Products productList={productList} title={"All Products"}/>
    </div>
  )
}

export default AllProducts
