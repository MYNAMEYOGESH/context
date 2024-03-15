import React, { createContext } from 'react'

export const UserContext = createContext()

function UserProvider(props) {
  return (
    <UserContext.Provider value={{name:"text",email: " text@gmail.com"}}>
        {
            props.children
        }
    </UserContext.Provider>
  )
}

export default UserProvider
