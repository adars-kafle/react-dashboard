import { ReactNode } from "react";
import { MRT_Row } from "material-react-table";
import { Supplier } from "./supplier";

// Props for app bar component
export interface AppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

// Props for drawer component
export interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

// Props for the supplier form
export interface SupplierFormInputs {
  name: string;
  address: string;
  email: string;
  phone: string;
}

// Props for the add supplier modal
export interface AddSupplierModalProps {
  open: boolean;
  isEditing: boolean;
  supplier: Supplier | Omit<Supplier, "id">;
  onClose: () => void;
  onSave: (data: SupplierFormInputs) => void;
}

// Props for supplier actions component
export interface SupplierActionsProps {
  onAddSupplier: () => void;
}

// Props for the suppliers table
export interface SuppliersTableProps {
  data: Supplier[];
  onEditSupplier: (supplier: Supplier) => void;
  onDeleteSupplier: (row: MRT_Row<Supplier>) => void;
}

// Props for the error boundary component
export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
