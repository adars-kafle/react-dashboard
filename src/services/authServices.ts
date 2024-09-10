import api from "./api";
import {
  type User,
  type LoginCredentials,
  type SignupCredentials,
  type LoginResponse,
} from "../interfaces/auth";
import { handleApiError } from "../utils/errorHandlers";
import { ENDPOINTS } from "../config/api";

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>(
        ENDPOINTS.LOGIN,
        credentials
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  signup: async (credentials: SignupCredentials): Promise<{ user: User }> => {
    try {
      const response = await api.post<{ user: User }>(
        ENDPOINTS.SIGNUP,
        credentials
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  logout: async (): Promise<void> => {
    try {
      await api.post(ENDPOINTS.LOGOUT);
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await api.get<User>(ENDPOINTS.ME);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        return null;
      }
      throw handleApiError(error);
    }
  },
};
