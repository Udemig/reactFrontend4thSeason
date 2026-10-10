import React, { useMemo, useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    const doubleCount = useMemo(() => {
        console.log("calculating...")
        return count * 2
    }, [count])

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Double: {doubleCount}</h2>
            <button onClick={()=> setCount(count +1)}>
                increase
            </button>

            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder='enter name'/>
        </div>
    )
}

export default App2