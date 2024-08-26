import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import AuthApi from "../apis/AuthApi";


export const AuthContext = createContext(null);

const AuthContextProvider = AuthContext.Provider;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const decodeAndSetUser = (accessTokenParam) => {
        const jwtPayload = jwtDecode(accessTokenParam)
        const newUser = {
            id: jwtPayload.sub,
            username: jwtPayload.username,
            email: jwtPayload.email,
            name: jwtPayload.name,
            role: jwtPayload.role,
            profilePictureUrl: jwtPayload.profilePictureUrl,
        }
        setUser(newUser);
        setIsLoading(false);
    }
    
    const loadUser = () => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            decodeAndSetUser(accessToken)
        }
    }

    useEffect(() => {
      loadUser();
      setIsLoading(false)
    },[]);

    const login = async (username,password) => {
        setIsLoading(true)
        const {accessToken, refreshToken} = await AuthApi.login(
            username,
            password
        )
        localStorage.removeItem("accessToken", accessToken);
        localStorage.removeItem("refreshToken", refreshToken)
        decodeAndSetUser(accessToken)
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken")
        setUser(null)
    }
    
    const isAuthenticated = !!user;

    if (isLoading) return <div>Loading ...</div>

    return (
        <AuthContextProvider value={{logout,user, isAuthenticated, login}}>
            {children}
        </AuthContextProvider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};