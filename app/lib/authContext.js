import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

export const authContext = React.createContext({
  auth: {
  	loggedIn: false,
  	user: undefined,
  },
  setAuthStatus: async (auth) => null,
})

export const useAuthContext = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
  const [auth, setAuthStatus] = useState({loggedIn: false, user: undefined,})
  
  useEffect(()=>{
    axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    axios.defaults.withCredentials = true;
    axios.get(process.env.NEXT_PUBLIC_API_URI + "/auth").then((response)=>{
      if(response.status == 200)
        setAuthStatus({loggedIn: true , user: response.data.user });
    }).catch(function (error) {
        console.log(error);
    })
  },[])
  

  return <authContext.Provider value={{ auth, setAuthStatus }}>{children}</authContext.Provider>
}