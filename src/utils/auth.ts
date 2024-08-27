import { LoginCredentials, SignupCredentials } from "../interfaces/types";
import { api } from "../services/api";
import { toastError, toastSuccess } from "./toaster";

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("token") !== null;
};

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.login(credentials);
    toastSuccess("Logged in successfully!");
    return response.user;
  } catch (error) {
    toastError("Login failed! " + error);
    throw new Error(error as string);
  }
};

export const signup = async (credentials: SignupCredentials) => {
  try {
    const response = await api.signup(credentials);
    toastSuccess("Registration successful!");
    return response.user;
  } catch (error) {
    toastError("Registration failed! Reason: " + error);
    throw new Error(error as string);
  }
};

export const logout = async () => {
  await api.logout();
  toastSuccess("Logged out successfully!");
};

export const getCurrentUser = async () => {
  return api.getCurrentUser();
};
