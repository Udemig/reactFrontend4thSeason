import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const App4 = () => {

   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
        {data && 
        data.map((item) => {
            return <p key={item.id}>{item.title}</p>
        })}
    </>
  )
}

export default App4