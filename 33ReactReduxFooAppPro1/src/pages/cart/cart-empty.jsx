import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='box flex flex-col items-center gap-5 py-10 text-center'>
        <span className="rounded-full bg-red-50 py-4 text-red-500">
            <ShoppingCart className='size-8' />
        </span>

        <div>
            <h1 className="text-2xl font-bold">Welcome to the basket</h1>
            <p className="muted mt-2">Your basket is empty</p>
        </div>

        <Link to="/" className='pill bg-red-500 text-white hover:bg-red-500/90'>
            Check Restaurants
        </Link>
    </div>
  )
}

export default CartEmpty