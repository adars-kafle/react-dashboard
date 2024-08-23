import { createContext, useState, useEffect, ReactNode } from "react";
import { type User, type AuthContext as AuthContextType } from "../lib/types";
import { getCurrentUser as getCurrentUserApi } from "../utils/auth";

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Create the Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUserApi();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
