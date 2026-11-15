import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/looder'
import Error from '../../components/error'
import CartEmpty from './cart-empty'
import Card from "./card";

const Cart = () => {

  const {isLoading ,error, cart} = useSelector((store) => store.cartReducer)

  return (
    <div className="container space-y-6">
      <div>
        <h1 className="pill bg-white/80">Orders</h1>

         <h1 className="text-3xl font-bold">Basket</h1>

         <p className="muted mt-1">Set your orders up</p>

         <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
            <div>
              {isLoading ? (
                <Loader />
              ): error ? (
                <Error message={error} />
              ): cart.length === 0 ?(
                <CartEmpty />
              ):(
                cart.map((product)=> <Card key={product.id} product={product} /> )
              )}
            </div>
         </div>
      </div>
    </div>
  )
}

export default Cart