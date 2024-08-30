import React, { lazy, useState } from "react";
import { Supplier, SupplierFormInputs } from "../../interfaces/types";
import { dummyData } from "../../services/suppliersData";
import SuppliersHeader from "./components/SupplierHeader";
import SupplierActions from "./components/SupplierActions";
import SuppliersTable from "./components/SupplierTable";
import { MRT_Row } from "material-react-table";
import { Box } from "@mui/material";

const SupplierModal = lazy(() => import("./components/SupplierModal")); // For import optimization

const SuppliersPage: React.FC = () => {
  const [data, setData] = useState<Supplier[]>(dummyData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState<Supplier | null>(null);

  const handleOpenModal = (supplier?: Supplier) => {
    if (supplier?.id && supplier?.email) {
      setCurrentSupplier(supplier);
      setIsEditing(true);
    } else {
      setCurrentSupplier(null);
      setIsEditing(false);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentSupplier(null);
  };

  const handleSaveSupplier = (newSupplier: SupplierFormInputs) => {
    if (isEditing && currentSupplier) {
      setData((prevData) =>
        prevData.map((supplier) =>
          supplier.id === currentSupplier.id
            ? { ...supplier, ...newSupplier }
            : supplier
        )
      );
    } else {
      const id = Math.max(...data.map((s) => s.id), 0) + 1;
      setData([...data, { ...newSupplier, id }]);
    }
    handleCloseModal();
  };

  const handleDeleteSupplier = (row: MRT_Row<Supplier>) => {
    if (confirm("Are you sure you want to delete this supplier?")) {
      setData((prev) =>
        prev.filter((supplier) => supplier.id !== row.original.id)
      );
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <SuppliersHeader />
      <SupplierActions onAddSupplier={handleOpenModal} />
      <SuppliersTable
        data={data}
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
