import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email,password) => { }
    
    
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const logdininfo = localStorage.getItem('isLoggedIn');
        if (logdininfo === '1') {
          setIsLoggedIn(true);
        }
        return () => {
          
        }
    }, []);
    
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedin');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedin', '1');
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>;
    
}

export default AuthContext;

