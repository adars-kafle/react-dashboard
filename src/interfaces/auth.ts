// Types related to authentication and user management

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

export type LoginResponse = {
  message: string;
  user: User;
};

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  login: (credentials: LoginCredentials) => Promise<LoginResponse>;
  signup: (credentials: SignupCredentials) => Promise<{ user: User }>;
  logout: () => Promise<void>;
  refetchUser: () => Promise<void>;
}
