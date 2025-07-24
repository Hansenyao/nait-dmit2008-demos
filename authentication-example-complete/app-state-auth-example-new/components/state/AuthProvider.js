import {useRouter} from 'next/router'

import {useState, useContext, createContext, useEffect} from 'react'

import { login } from '@/utils/api/auth'

export const AuthenticationContext = createContext({})

// custom hook with default argument
export const useAuth = (options = {protectedPage: false}) => {
  const context = useContext(AuthenticationContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  /* reroute the user if they have logged out */
  const router = useRouter()
  useEffect(()=> {
    // check if the user is authenticated and if it's a protected page.
    if (!context.isAuthenticated && options.protectedPage) {
      // 
      router.push("/")
    }
  }, [context.isAuthenticated])
  return context
}

export default function AuthProvider({children}) {
  const [token, setToken] = useState("")
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // make the api request and define the state.
  const signIn = ({email, password}) => {
    return login({email, password}).then((loginData)=> {
      /*
      Note this is going to contain both the 
      access token and the user. This is not 
      always the case with a login endpoint.
      For the response please refer to https://www.npmjs.com/package/json-server-auth
      */
      setIsAuthenticated(true)
      setToken(loginData.accessToken)
      setUser(loginData.user)
    })
  }


  const signOut = () => {
    setIsAuthenticated(false)
    setUser()
    setToken("")
  }
  
  /* 
  You can implement a registration here!
  - implement the register in the api.
  - do essentially the same as above.

  You can also implement a user update function here as well.
  - implement the api request (using the token)
  - do the same as login except just use the setUser function with the data returned
  */
  return <AuthenticationContext.Provider value={{
      token, user, isAuthenticated, signIn, signOut    
    }}>
      {children}
    </AuthenticationContext.Provider>
}
