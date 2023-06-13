import {createContext, useState, useContext, useEffect} from 'react';
import {authedRequest, JWT_TOKEN} from "../http";

const AuthContext = createContext();

const useAuth = () => {
  const _authed = Boolean(localStorage.getItem(JWT_TOKEN));
  const [authed, setAuthed] = useState(_authed);
  const [userData, setUserData] = useState();
  return {
    authed,
    userData,
    setUserData,
    login(token) {
      localStorage.setItem(JWT_TOKEN, token);
      return new Promise(res => {
        setAuthed(true);
        res();
      })
    },
    logout() {
      localStorage.removeItem(JWT_TOKEN);
      return new Promise(res => {
        setAuthed(false);
        res();
      })
    }
  }
}

export const AuthProvider = ({children}) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}
