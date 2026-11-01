import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
    
  return (
    <div className='rounded-xl p-5 shadow'>
      <h2 className='text-xl font-bold'>{product.name}</h2>
      <p className='text-gray-500'>${product.price}</p>

      <button 
      onClick={()=>dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard