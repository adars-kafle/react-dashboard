import { createContext, useState, useEffect, ReactNode } from "react";
import { type User, type LoginCredentials, type SignupCredentials, type AuthContext as AuthContextType } from "../lib/types";
import { login as loginApi, signup as signupApi, logout as logoutApi, getCurrentUser as getCurrentUserApi } from "../utils/auth";

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the Provider Component
export const AuthProvider = ({ children }: {
    children: ReactNode
}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (credentials: LoginCredentials) => {
        const loggedInUser = await loginApi(credentials);
        setUser(loggedInUser);
    };

    const signup = async (credentials: SignupCredentials) => {
        const newUser = await signupApi(credentials);
        setUser(newUser);
    };

    const logout = () => {
        logoutApi();
        setUser(null);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUserApi();
            setUser(currentUser);
        }
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ login, signup, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};