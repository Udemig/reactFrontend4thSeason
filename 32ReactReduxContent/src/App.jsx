import { useState } from 'react'

import './App.css'
import { useSelector } from 'react-redux'
import ProductCard from "./components/ProductCard";

const products = [
  {id: 1, name: "iPhone", price: 999},
  {id: 2, name: "Macbook", price: 1999},
]

function App() {
  const items = useSelector((state)=> state.cart.items)

  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Productss</h1>
      <p className='mb-4'>Cart Items: {items.length}</p>

      <div className='grid gap-4 mb:grid-cols-2'>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
