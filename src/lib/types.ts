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

export type Supplier = {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
};
