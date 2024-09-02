import { ComponentType, LazyExoticComponent, ReactNode } from "react";
import { MRT_Row } from "material-react-table";

type RouteElement =
  | ComponentType<any>
  | LazyExoticComponent<ComponentType<any>>;

export interface RoutesConfig {
  path?: string;
  element?: RouteElement;
  layout?: ComponentType<{ children: React.ReactNode }>;
  children?: RoutesConfig[];
}

export interface AppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface SupplierFormInputs {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export interface AddSupplierModalProps {
  open: boolean;
  isEditing: boolean;
  supplier: Supplier | Omit<Supplier, "id">;
  onClose: () => void;
  onSave: (data: SupplierFormInputs) => void;
}

export interface SupplierActionsProps {
  onAddSupplier: () => void;
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

export interface SuppliersTableProps {
  data: Supplier[];
  onEditSupplier: (supplier: Supplier) => void;
  onDeleteSupplier: (row: MRT_Row<Supplier>) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export type ModulesProps = {
  title: string;
  description: string;
  href: string;
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
export interface LoginResponse {
  message: string;
  user: User;
}
