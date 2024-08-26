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
import { Supplier, SupplierFormInputs } from "../../lib/types";
import { dummyData } from "../../services/suppliersData";

const SupplierModal = lazy(() => import("./components/SupplierModal"));

const SuppliersPage: React.FC = () => {
  const [data, setData] = useState<Supplier[]>(dummyData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState<Supplier | null>(null);

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
          supplier={
            currentSupplier || { name: "", address: "", email: "", phone: "" }
          }
          onClose={handleCloseModal}
          onSave={handleSaveSupplier}
        />
      </Suspense>
    </Box>
  );
};

export default SuppliersPage;
