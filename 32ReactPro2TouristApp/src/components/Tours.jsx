import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className='section' id='tours'>
        <Title title="fatured" subTitle="tours" />
        <div className="section-center featured-center">
            {tours.map((tour)=>{
                return <Tour {...tour} key={tour.id} />
            })}
        </div>
    </section>
  )
}

export default Tours