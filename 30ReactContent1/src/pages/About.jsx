import React, { useEffect, useState } from 'react'

function withBorder(WrappedComponent) {
  return function NewComponent(props){
    return (
      <div style={{border: "2px solid blue", padding: "10px"}}>
        <h3>llala</h3>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

function Greeting({name}){
  return <h1>Hello, {name}</h1>
}

const GreetingWithBorder = withBorder(Greeting)

const About = () => {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count) => count + 1)
    },1000)
  },[])

  return (
    <div>
      <Greeting name="sreeja" />
      <GreetingWithBorder name = "memo" />
      <h2>I"ve rendered {count} times!</h2>
    </div>
  )
}

export default About