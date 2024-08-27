import { MRT_Row } from "material-react-table";

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

export type ModulesProps = {
  title: string;
  description: string;
  href: string;
};

export type AuthContext = {
  user: User | null;
};
