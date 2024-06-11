import React, { useContext, useState } from "react";

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setUserData(userData);
  };
  const logout = () => {
    setUserData(null);
  };
  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 

export const useAuth = () =>{
    return useContext(AuthContext);
}
