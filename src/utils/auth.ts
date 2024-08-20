import { LoginCredentials, SignupCredentials } from "../lib/types";
import { api } from "../services/api";

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("token") !== null;
};

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.login(credentials);
    return response.user;
  } catch (error) {
    throw error;
  }
};

export const signup = async (credentials: SignupCredentials) => {
  try {
    const response = await api.signup(credentials);
    return response.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await api.logout();
};

export const getCurrentUser = async () => {
  return api.getCurrentUser();
};
