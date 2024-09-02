import { Theme } from "@mui/material";

export const getSupplierTableStyles = (theme: Theme) => ({
  tableBodyRow: {
    hover: true,
    sx: {
      backgroundColor: (row: any) =>
        row.index % 2 === 0 ? "inherit" : theme.palette.action.hover,
      "&:hover": {
        backgroundColor: theme.palette.action.selected,
      },
    },
  },
  tableProps: {
    sx: {
      tableLayout: "fixed",
      padding: theme.spacing(3),
      borderCollapse: "separate",
      "& .MuiTableRow-root": {
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
      },
    },
  },
  tableBodyCell: {
    sx: {
      padding: theme.spacing(2),
      borderRight: "1px solid rgba(224, 224, 224, 1)",
      "&:last-child": {
        borderRight: "none",
      },
    },
  },
  tableHeadCell: {
    sx: {
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderBottom: "none",
    },
  },
});
