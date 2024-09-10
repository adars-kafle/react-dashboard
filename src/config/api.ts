// Base URL for the API
export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Default configuration for the API requests
export const API_CONFIG = {
  baseURL: API_URL,
  withCredentials: true,
};

// API Endpoints
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  LOGOUT: "/auth/logout",
  ME: "/user/me", // current user
  SUPPLIERS: "/suppliers",
};
