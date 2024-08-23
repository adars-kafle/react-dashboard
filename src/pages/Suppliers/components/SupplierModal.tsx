import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { AddSupplierModalProps } from "../../../lib/types";

const SupplierModal: React.FC<AddSupplierModalProps> = ({
  open,
  isEditing,
  supplier,
  onClose,
  onSave,
  onInputChange,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {isEditing ? "Edit Supplier" : "Add New Supplier"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Supplier Name"
          type="text"
          fullWidth
          variant="outlined"
          value={supplier.name}
          onChange={onInputChange}
        />
        <TextField
          margin="dense"
          name="address"
          label="Address"
          type="text"
          fullWidth
          variant="outlined"
          value={supplier.address}
          onChange={onInputChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={supplier.email}
          onChange={onInputChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone"
          type="tel"
          fullWidth
          variant="outlined"
          value={supplier.phone}
          onChange={onInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave} variant="contained">
          {isEditing ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SupplierModal;
