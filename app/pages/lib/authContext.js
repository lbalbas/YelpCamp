import React, { useContext, useState } from 'react'

export const authContext = React.createContext({
  auth: {
  	loggedIn: false,
  	user: undefined,
  },
  setAuthStatus: async (auth) => null,
})

export const useAuthContext = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
  const [auth, setAuthStatus] = useState({
  	loggedIn: false,
  	user: undefined,
  })

  return <authContext.Provider value={{ auth, setAuthStatus }}>{children}</authContext.Provider>
}