import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  type Supplier,
  type SuppliersTableProps,
} from "../../../interfaces/types";

const SuppliersTable: React.FC<SuppliersTableProps> = ({
  data,
  onEditSupplier,
  onDeleteSupplier,
}) => {
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
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowActions
      positionActionsColumn="last"
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", gap: "8px" }}>
          <IconButton onClick={() => onEditSupplier(row.original)} size="small">
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => onDeleteSupplier(row)}
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
  );
};

export default SuppliersTable;
