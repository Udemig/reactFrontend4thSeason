import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Profile = () => {
    const {user, setUser} = useContext(UserContext)
  return (
    <div>
        <h2>Hi {user}</h2>
        <button onClick={()=>setUser("mehmet")}>
            Change the user
        </button>
    </div>
  )
}

export default Profile