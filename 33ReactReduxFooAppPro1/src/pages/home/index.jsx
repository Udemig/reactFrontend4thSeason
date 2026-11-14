import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/looder'
import Error from "../../components/error";
import Card from './card';

const Home = () => {

  const{isLoading, error, restaurants} = useSelector((store) => store.restaurantReducer)

  return (
    <div className='container'>
      <div className="max-w-2xl">
        <h1 className="font-semibold text-3xl md:text-4xl">Nearest Restaurants</h1>
        <p className="muted">Touch your favorite foods whitin minutes</p>
      </div>
      
      {isLoading ? (
        <Loader />
      ): error ? (
        <Error message={error} />
      ): (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {restaurants.map((item)=>(
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Home