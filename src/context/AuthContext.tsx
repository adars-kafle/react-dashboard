import { createContext, useState, useEffect, ReactNode } from "react";
import {
  type User,
  type AuthContextType,
  type LoginCredentials,
  type SignupCredentials,
} from "../interfaces/types";
import { authApi } from "../services/authServices";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  // Get the information of the current user
  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await authApi.getCurrentUser(); // send api request to get the current user
      if (response) {
        setUser(response);
        localStorage.setItem("user", JSON.stringify(response)); // store the user info in local storage
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log("Error fetching user: ", error);
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(); // fetch the user info when the component is mounted
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await authApi.login(credentials);
      await fetchUser(); // If the login is successful, fetch the user info.
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    setIsLoading(true);
    try {
      const response = await authApi.signup(credentials);
      await fetchUser(); // Fetch user data after successful signup
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authApi.logout(); // Logout the user
      setUser(null); // remove the user info from the state
      localStorage.removeItem("user"); // remove the user info from the local storage
    } catch (error) {
      console.log("Error logging out: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // This variable stores the values to be accessed by the children components
  const value: AuthContextType = {
    user,
    isLoading,
    setUser,
    login,
    signup,
    logout,
    refetchUser: fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
