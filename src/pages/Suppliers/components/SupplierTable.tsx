import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Box, IconButton, useTheme } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  type Supplier,
  type SuppliersTableProps,
} from "../../../interfaces/types";
import { getSupplierTableStyles } from "./supplierTableStyles";

const SuppliersTable: React.FC<SuppliersTableProps> = ({
  data,
  onEditSupplier,
  onDeleteSupplier,
}) => {
  const theme = useTheme();
  const styles = getSupplierTableStyles(theme);

  const columns = useMemo<MRT_ColumnDef<Supplier>[]>(
    () => [
      {
        accessorKey: "id",
        header: "S.N.",
        size: 60,
        Cell: ({ row }) => row.index + 1,
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
      muiTableBodyRowProps={styles.tableBodyRow}
      muiTableProps={styles.tableProps}
      muiTableBodyCellProps={styles.tableBodyCell}
      muiTableHeadCellProps={styles.tableHeadCell}
      initialState={{
        density: "comfortable",
        pagination: { pageSize: 10, pageIndex: 0 },
      }}
    />
  );
};

export default SuppliersTable;
