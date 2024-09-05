import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../interfaces/types";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a provider!");
  }

  return context;
};
