import { useState } from "react";
import { Supplier, SupplierFormInputs } from "../interfaces/types";
import { useCreateSupplier, useUpdateSupplier } from "./useSupplier";
import { toastSuccess, toastError } from "../utils/toaster";

export const useSupplierModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState<Supplier | null>(null);

  const createSupplier = useCreateSupplier();
  const updateSupplier = useUpdateSupplier();

  const handleOpenModal = (supplier?: Supplier) => {
    if (supplier) {
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

  const handleSaveSupplier = async (newSupplier: SupplierFormInputs) => {
    try {
      if (isEditing && currentSupplier) {
        await updateSupplier.mutateAsync({
          id: currentSupplier.id.toString(),
          updates: newSupplier,
        });
        toastSuccess("Supplier updated successfully!");
      } else {
        await createSupplier.mutateAsync(newSupplier);
        toastSuccess("Supplier created successfully!");
      }
      handleCloseModal();
    } catch (error) {
      toastError("An error occurred while saving the supplier.");
      console.error(error);
    }
  };

  return {
    modalOpen,
    isEditing,
    currentSupplier,
    handleOpenModal,
    handleCloseModal,
    handleSaveSupplier,
  };
};
