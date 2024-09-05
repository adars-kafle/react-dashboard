import api from "./api";
import {
  type User,
  type LoginCredentials,
  type SignupCredentials,
  type LoginResponse,
} from "../interfaces/types";
import { handleApiError } from "../utils/errorHandlers";

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await api.post<LoginResponse>(
        "/auth/login",
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
        "/auth/signup",
        credentials
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  logout: async (): Promise<void> => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await api.get<User>("/user/me");
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        return null;
      }
      throw handleApiError(error);
    }
  },
};
