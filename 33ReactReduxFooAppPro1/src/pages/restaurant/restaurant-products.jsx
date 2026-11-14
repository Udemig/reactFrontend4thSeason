import { Flame } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/looder'
import api from "../../api";
import Card from './card';

const RestaurantProducts = () => {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setIsLoading(true)

        api
            .get(`/products?restaurantId=${id}`)
            .then((res) =>{
                console.log("RestaurantProducts ",res.data)
                setProducts(res.data)
                setError(null)
            })
            .catch((err) => setError(err.message))
            .finally(()=>setIsLoading(false))
    },[id])

    if (isLoading) return <Loader />

    if (error) return null

  return (
    <div>
        <h2 className='text-2xl md:text-3xl font-bold flex items-center gap-2'>
            <Flame className = "text-red-500 size-7" />
            Popular
        </h2>

        <p className='muted mt-1'> Most popular foods</p>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
            {products.map((product)=>(
                <Card key={product.id} product={product} />
            ))}
        </div>

    </div>
  )
}

export default RestaurantProducts