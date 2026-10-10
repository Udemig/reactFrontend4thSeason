import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Profile from './Profile'


const App1 = () => {
   const [user, setUser] = useState("memo")

  return (
    <UserContext.Provider value={{user, setUser}}>
        <h1>React Example</h1>
        <Profile />
    </UserContext.Provider>
  )
}

export default App1