import { createContext, useState, useEffect, ReactNode } from "react";
import {
  type User,
  type AuthContextType,
  type LoginCredentials,
  type SignupCredentials,
} from "../interfaces/auth";
import { authApi } from "../services/authServices";
import { devError, devLog } from "../utils/devLogger";
import { USER_KEY } from "../constants/keys";
import { getItem, removeItem, setItem } from "../utils/storage";
import { parseJson, stringifyJson } from "../utils/json";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = getItem<string>(USER_KEY);
    return storedUser ? parseJson<User>(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  // Get the information of the current user
  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await authApi.getCurrentUser(); // send api request to get the current user
      devLog("USER is: ", response); // Using devLog instead of console.log
      if (response) {
        setUser(response);
        setItem(USER_KEY, stringifyJson(response)); // store the user info in local storage
      } else {
        setUser(null);
        removeItem(USER_KEY);
      }
    } catch (error) {
      devError("Error fetching user: ", error);
      setUser(null);
      removeItem(USER_KEY);
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
      devLog("LOGIN RESPONE: ", response);
      await fetchUser(); // If the login is successful, fetch the user info.
      return response;
    } catch (error) {
      devError("Error logging in: ", error);
      throw new Error(`Error logging in: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    setIsLoading(true);
    try {
      const response = await authApi.signup(credentials);
      devLog("SIGNUP RESPONSE: ", response);
      await fetchUser(); // Fetch user data after successful signup
      return response;
    } catch (error) {
      devError("Error signing up: ", error);
      throw new Error(`Error signing up: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authApi.logout(); // Logout the user
      setUser(null); // remove the user info from the state
      removeItem(USER_KEY); // remove the user info from the local storage
    } catch (error) {
      devError("Error logging out: ", error);
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
