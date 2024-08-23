import React, { lazy, Suspense, useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { Supplier } from "../../lib/types";
import { dummyData } from "../../services/suppliersData";

const SupplierModal = lazy(() => import("./components/SupplierModal"));

const SuppliersPage: React.FC = () => {
  const [data, setData] = useState<Supplier[]>(dummyData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState<
    Supplier | Omit<Supplier, "id">
  >({
    name: "",
    address: "",
    email: "",
    phone: "",
  }); // Unified state for handling both editing and adding supplier

  const handleOpenModal = (supplier?: Supplier) => {
    if (supplier) {
      setCurrentSupplier(supplier);
      setIsEditing(true);
    } else {
      setCurrentSupplier({ name: "", address: "", email: "", phone: "" });
      setIsEditing(false);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentSupplier({ name: "", address: "", email: "", phone: "" });
  };

  const handleSaveSupplier = () => {
    if (isEditing) {
      setData((prevData) =>
        prevData.map((supplier) =>
          supplier.id === (currentSupplier as Supplier).id
            ? { ...supplier, ...currentSupplier }
            : supplier
        )
      );
    } else {
      const id = Math.max(...data.map((s) => s.id), 0) + 1;
      setData([...data, { ...(currentSupplier as Supplier), id }]);
    }
    handleCloseModal();
  };

  const handleDeleteSupplier = (row: MRT_Row<Supplier>) => {
    if (confirm("Are you sure?")) {
      setData((prev) =>
        prev.filter((supplier) => supplier.id !== row.original.id)
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentSupplier({ ...currentSupplier, [name]: value });
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
          onClick={() => handleOpenModal()}
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
            <IconButton
              onClick={() => handleOpenModal(row.original)}
              size="small"
            >
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

      <Suspense fallback={<CircularProgress />}>
        <SupplierModal
          open={modalOpen}
          isEditing={isEditing}
          supplier={currentSupplier}
          onClose={handleCloseModal}
          onSave={handleSaveSupplier}
          onInputChange={handleInputChange}
        />
      </Suspense>
    </Box>
  );
};

export default SuppliersPage;
