import React, { useState } from 'react'
import { createContext } from 'react'

export let Authenticate=createContext()
const Auth = ({children}) => {
let [AuthValue,setAuth]=useState(true)
  return (
    <Authenticate.Provider value={[AuthValue,setAuth]}>{children}</Authenticate.Provider>
)
}

export default Auth