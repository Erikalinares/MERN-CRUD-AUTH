import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import Cookies from 'js-cookie'

export const authContext = createContext();

export const useAuth = () => {
     const context = useContext(authContext);
    if (!context) throw new Error ('useAuth must be used within a AuthProvider');
        return context; 
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
      try {
             const res = await registerRequest(user);
             console.log(res.data);
             setUser(res.data);
             setisAuthenticated(true);
      } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data);

      }
    };
    
    const signin = async (user) => {
      try {
            const res = await loginRequest(user);
            console.log(res)
            setisAuthenticated(true);
            setUser(res.data)
     } catch (error) {
            if (Array.isArray(error.response.data)){
          return setErrors(error.response.data);
        }
       setErrors([error.response.data]) 
      }
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setisAuthenticated(false);
        setUser(null);
      };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    },[errors])

    useEffect(() => {
        async function  checklogin () {

            const cookies = Cookies.get();
             if (!cookies.token) {
                setisAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

        try {
            const res = await verifyTokenRequest(cookies.token)
            if(!res.data) {
                setisAuthenticated(false)
                setLoading(false);
                  
                return;
            } 
            
            setisAuthenticated(true)
            setUser(res.data)  
            setLoading(false);             
        } catch (error) {
            console.log(error)
            setisAuthenticated(false)
            setUser(null)
            setLoading(false);  
           }
        }
         checklogin();  
    },[])

    return (
        <authContext.Provider value={{
            signup,
            signin,
            loading,
            logout,
            user,
            isAuthenticated,
            errors,
        }}>{children}</authContext.Provider>        
    )
};