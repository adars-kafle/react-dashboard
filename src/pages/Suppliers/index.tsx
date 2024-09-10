import React, { lazy } from "react";
import { Box, Typography } from "@mui/material";
import { MRT_Row } from "material-react-table";
import { type Supplier } from "../../interfaces/supplier";
import SuppliersHeader from "./components/SupplierHeader";
import SupplierActions from "./components/SupplierActions";
import SuppliersTable from "./components/SupplierTable";
import { useSuppliers, useDeleteSupplier } from "../../hooks/useSupplier";
import { useSupplierModal } from "../../hooks/useSupplierModal";
import { toastSuccess, toastError } from "../../utils/toaster";

const SupplierModal = lazy(() => import("./components/SupplierModal"));

const SuppliersPage: React.FC = () => {
  const { data: suppliers, error } = useSuppliers();
  const deleteSupplier = useDeleteSupplier();
  const {
    modalOpen,
    isEditing,
    currentSupplier,
    handleOpenModal,
    handleCloseModal,
    handleSaveSupplier,
  } = useSupplierModal();

  const handleDeleteSupplier = async (row: MRT_Row<Supplier>) => {
    if (confirm("Are you sure you want to delete this supplier?")) {
      try {
        await deleteSupplier.mutateAsync(row.original.id.toString());
        toastSuccess("Supplier deleted successfully!");
      } catch (error) {
        toastError("An error occurred while deleting the supplier.");
        console.error(error);
      }
    }
  };

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">
          An error occurred: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <SuppliersHeader />
      <SupplierActions onAddSupplier={() => handleOpenModal()} />
      <SuppliersTable
        data={suppliers || []}
        onEditSupplier={handleOpenModal}
        onDeleteSupplier={handleDeleteSupplier}
      />
      <SupplierModal
        open={modalOpen}
        isEditing={isEditing}
        supplier={
          currentSupplier || { name: "", address: "", email: "", phone: "" }
        }
        onClose={handleCloseModal}
        onSave={handleSaveSupplier}
      />
    </Box>
  );
};

export default SuppliersPage;
