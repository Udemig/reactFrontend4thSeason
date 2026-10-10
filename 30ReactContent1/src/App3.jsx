import React, { memo, useCallback, useState } from 'react'

const Child = memo(({handleClick}) =>{
    console.log("child rendered")

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
})

const App3 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    const handleClick = useCallback(()=>{
        setCount(prev => prev + 1)
    },[])

  return (
    <div>
        <h2>Count: {count}</h2>
        <Child handleClick={handleClick} />

        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
        placeholder='enter name' />
    </div>
  )
}

export default App3