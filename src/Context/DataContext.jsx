import React, { createContext } from 'react'
//create context instance
export const DataContext = createContext()


function DataProvider(props) {
  return (
    <DataContext.Provider value={{x:30, y:22, title: "WELCOM TO CONTEXT"}}>
       {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
