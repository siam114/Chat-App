import { createContext } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const value = {};

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
};
