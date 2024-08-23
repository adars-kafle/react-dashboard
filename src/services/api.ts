import {
  type User,
  type LoginCredentials,
  type SignupCredentials,
} from "../lib/types";
import { mockUsers } from "./userData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  login: async (
    credentials: LoginCredentials
  ): Promise<{ token: string; user: User }> => {
    await delay(500); // for simulating newtwork delay

    const user = mockUsers.find((u) => u.email === credentials.email);
    if (user && credentials.password === user.password) {
      const token = btoa(user.email); // simple token generation, but insecure for real usage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      return { token, user };
    }
    throw new Error("Invalid credentials");
  },

  signup: async (
    credentials: SignupCredentials
  ): Promise<{ token: string; user: User }> => {
    await delay(500);

    if (mockUsers.some((u) => u.email === credentials.email)) {
      throw new Error("User already exists");
    }

    const newUser: User = {
      id: mockUsers.length + 1,
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    };
    mockUsers.push(newUser);

    const token = btoa(newUser.email); // token generation
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(newUser));
    return { token, user: newUser };
  },

  logout: async (): Promise<void> => {
    await delay(200);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: async (): Promise<User | null> => {
    await delay(200);
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
