import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import {
  type AddSupplierModalProps,
  type SupplierFormInputs,
} from "../../../interfaces/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supplierSchema } from "../../../schemas/supplierSchema";

const SupplierModal: React.FC<AddSupplierModalProps> = ({
  open,
  isEditing,
  supplier,
  onClose,
  onSave,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<SupplierFormInputs>({
    resolver: zodResolver(supplierSchema),
    defaultValues: supplier,
  });

  // This side effect runs when the supplier or setValue dependencies change.
  useEffect(() => {
    if (supplier) {
      // It converts the supplier object into an array of key-value pairs.
      // Then, the forEach loop iterates over these pairs.
      Object.entries(supplier).forEach(([key, value]) => {
        // this populates the form fields with the values from the supplier object whenever the supplier changes.
        setValue(key as keyof SupplierFormInputs, value as string);
      });
    }
  }, [supplier, setValue]);

  // Handling form submit
  const onSubmit = (data: SupplierFormInputs) => {
    onSave(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {isEditing ? "Edit Supplier" : "Add New Supplier"}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Supplier Name"
            type="text"
            fullWidth
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {isEditing ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SupplierModal;
