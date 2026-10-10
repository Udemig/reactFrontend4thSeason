import React, { useRef } from 'react'

const Home = () => {

    const inputRef = useRef()

    const focusInput = () => {
        inputRef.current.focus()
    }

  return (
    <div>
        <input type="text" placeholder='your mail' ref={inputRef} />
        <button onClick={focusInput}> Focus Input </button>
    </div>
  )
}

export default Home