import React, { useState } from "react";
import { createContext } from "react";

//authcontext init
export const Authenticate = createContext();

const AuthContext = ({ children }) => {
  //auth data default false
  const [IsAuth, setAuth] = useState(false);

  return (
    <Authenticate.Provider value={{ IsAuth, setAuth }}>
      {children}
    </Authenticate.Provider>
  );
};

export default AuthContext;
