import { useState } from 'react'
import './App.css'
import Car from './components/Car'
import MercedesCar from './components/MercedesCar'
import Truck from './components/Truck'


function App() {
  
  // let counter = 1
  const [counter, setCounter] = useState(1)
  function runIt() {
    console.log("I'm clicked")
    // counter  = counter + 1
    setCounter(counter + 1)
    console.log("counter " , counter)

  
  }
  const cars = ["ford","bmw","porsche","mercedes"]

  return (
    <>
      <div>
        <div className='class1'>{(counter) == 2 ? "Hi world" : "No hi"}</div>
        <button onClick={runIt}>Click me</button>
        <Car brand="BMW" color="red" isGoal={false} />
        <Truck />
        <MercedesCar brand = "merco"/>
        <ul>
          {cars.map((car)=><li>I am a {car}</li>)}
        </ul>
        <form action="">
          <label htmlFor="" style={{backgroundColor: "yellow", color: "red", margin: "10px", padding: "10px"}}>Enter your name</label>
          <input type="text" />
        </form>
      </div>
    </>
  )
}

export default App
