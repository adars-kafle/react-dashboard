import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { Supplier } from "../../lib/types";
import { dummyData } from "../../services/suppliersData";

const SuppliersPage: React.FC = () => {
  const [data, setData] = useState<Supplier[]>(dummyData);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState<Omit<Supplier, "id">>({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewSupplier({ name: "", address: "", email: "", phone: "" });
  };

  const handleAddSupplier = () => {
    const id = Math.max(...data.map((s) => s.id), 0) + 1;
    const supplierToAdd = { id, ...newSupplier };
    setData([...data, supplierToAdd]);
    handleClose();
  };

  // For the edit button in the table row
  const handleEditSupplier = (row: MRT_Row<Supplier>) => {
    setEditingSupplier(row.original);
    setNewSupplier({
      name: row.original.name,
      address: row.original.address,
      email: row.original.email,
      phone: row.original.phone,
    });
    setEditOpen(true);
  };

  const handleDeleteSupplier = (row: MRT_Row<Supplier>) => {
    const flag = confirm("Are you sure?");

    if (flag) {
      setData((prev) =>
        prev.filter((supplier) => supplier.id !== row.original.id)
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  // For the update button of the modal
  const handleUpdateSupplier = () => {
    if (editingSupplier) {
      const updatedData = data.map((supplier) =>
        supplier.id === editingSupplier.id
          ? { ...supplier, ...newSupplier }
          : supplier
      );
      setData(updatedData);
      setEditOpen(false);
      setEditingSupplier(null);
      setNewSupplier({ name: "", address: "", email: "", phone: "" });
    }
  };

  const columns = useMemo<MRT_ColumnDef<Supplier>[]>(
    () => [
      {
        accessorKey: "id",
        header: "S.N.",
        size: 60,
      },
      {
        accessorKey: "name",
        header: "Supplier Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phone",
        header: "Phone",
      },
    ],
    []
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Suppliers
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Supplier
        </Button>
      </Box>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowActions
        positionActionsColumn="last"
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "8px" }}>
            <IconButton onClick={() => handleEditSupplier(row)} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteSupplier(row)}
              size="small"
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={true}
        enableSorting={true}
        enableTopToolbar={true}
        enableBottomToolbar={true}
        muiTableBodyRowProps={{ hover: true }}
        muiTableProps={{
          sx: {
            tableLayout: "fixed",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            borderRight: "1px solid rgba(224, 224, 224, 1)",
            "&:last-child": {
              borderRight: "none",
            },
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            borderRight: "1px solid rgba(224, 224, 224, 1)",
            "&:last-child": {
              borderRight: "none",
            },
          },
        }}
        initialState={{
          density: "compact",
          pagination: { pageSize: 10, pageIndex: 0 },
        }}
      />

      {/* Add Supplier Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Supplier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Supplier Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newSupplier.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={newSupplier.address}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newSupplier.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            value={newSupplier.phone}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddSupplier} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Supplier Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Supplier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Supplier Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newSupplier.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={newSupplier.address}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newSupplier.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            value={newSupplier.phone}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateSupplier} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SuppliersPage;
